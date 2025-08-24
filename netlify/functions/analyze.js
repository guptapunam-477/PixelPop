// Serverless endpoint for Netlify Functions: A secure proxy for the AI Analyzer.
// This function calls the Gemini API using a key stored in environment variables.
// ENVIRONMENT VARIABLE REQUIRED: GEMINI_API_KEY


// Using a recent, stable Gemini Flash model.
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent';


/**
* Creates the prompt for the Gemini API, instructing it to return a specific JSON format.
* @param {string} text - The user's problem description.
* @returns {string} The full prompt for the AI model.
*/
function promptFor(text){
 return `You are a solutions analyst for a digital agency called PixelPop.
Service catalog: [
 {id: "website_design", label: "Website Design"},
 {id: "web_dev", label: "Website & Web App Development"},
 {id: "mobile_app", label: "Mobile App Development"},
 {id: "perf_marketing", label: "Digital & Performance Marketing"}
].
Given the user's problem, return STRICT JSON with fields: services (array of {id,label}), reason (string, 3-6 sentences), steps (array of 3 short imperatives). Only use ids from the catalog. No markdown.


User problem: ${text}


Return JSON:`;
}


/**
* A local fallback function that suggests services based on keywords if the API fails.
* @param {string} t - The user's problem description.
* @returns {object} A structured response object.
*/
function localSuggest(t){
 t=(t||'').toLowerCase(); const buckets=new Set();
 const has=(...k)=>k.some(w=>t.includes(w));
 if(has('roas','ads','cpc','cac','retarget','facebook','google ads','meta ads')) buckets.add('perf_marketing');
 if(has('slow','lcp','cls','web vitals','core web','performance','speed')) buckets.add('web_dev');
 if(has('app','android','ios','play store','app store')) buckets.add('mobile_app');
 if(has('brand','ui','ux','landing','redesign','conversion','cvr')) buckets.add('website_design');
 if(has('seo','organic','sitemap','crawl','index','schema')) { buckets.add('web_dev'); buckets.add('perf_marketing'); }
 if(!buckets.size) buckets.add('website_design');
 const map={website_design:'Website Design', web_dev:'Website & Web App Development', mobile_app:'Mobile App Development', perf_marketing:'Digital & Performance Marketing'};
 return { services:[...buckets].map(id=>({id,label:map[id]})), reason:'Suggested by heuristic analyzer.', steps:['Clarify target audience.','Book a strategy call.','Scope discovery & timeline.'] };
}


/**
* The main handler for the Netlify serverless function.
* @param {object} event - The event object from Netlify.
* @returns {object} A response object with statusCode, headers, and body.
*/
exports.handler = async (event) => {
 const headers = cors(event.headers?.origin);
 if(event.httpMethod==='OPTIONS') return { statusCode:200, headers, body:'' };
 if(event.httpMethod!=='POST') return { statusCode:405, headers, body:'Method Not Allowed' };
 try{
   const { prompt } = JSON.parse(event.body||'{}');
   const text = String(prompt||'').slice(0,1000).trim();
   if(!text) return { statusCode:400, headers, body: JSON.stringify({ error:'Empty prompt' }) };


   // Securely access the API key from environment variables.
   const key = process.env.GEMINI_API_KEY;
   if(!key){
     // If no key is found, use the local fallback.
     return { statusCode:200, headers, body: JSON.stringify(localSuggest(text)) };
   }


   // Build the payload for the Gemini API.
   const payload = {
     contents: [{ parts: [{ text: promptFor(text) }] }],
     generationConfig: { responseMimeType: 'application/json' }
   };


   const res = await fetch(`${GEMINI_URL}?key=${key}`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
   if(!res.ok){
     // Fallback gracefully if the API call fails.
     return { statusCode:200, headers, body: JSON.stringify(localSuggest(text)) };
   }
   const data = await res.json();
   const content = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
   let out;
   try { out = JSON.parse(content); } catch { out = localSuggest(text); } // Fallback if JSON is malformed.
   return { statusCode:200, headers: { ...headers, 'Content-Type':'application/json' }, body: JSON.stringify(out) };
 }catch(e){
   return { statusCode:500, headers, body: JSON.stringify({ error:'Server error' }) };
 }
};


/**
* Helper function to generate CORS headers.
* @param {string} origin - The origin of the request.
* @returns {object} CORS headers.
*/
function cors(origin='*'){
 return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods':'POST, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' };
}