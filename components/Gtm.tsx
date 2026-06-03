import Script from "next/script";
import { SITE } from "@/lib/site";

/**
 * Google Tag Manager — head script.
 * Loaded with strategy="afterInteractive" so it never blocks first render,
 * while still firing early enough for tag management. Rendered in the root
 * layout, so it is present on every page (including /thank-you).
 */
export function GtmScript() {
  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE.gtmId}');`}
    </Script>
  );
}

/** GTM <noscript> fallback — must sit immediately after the opening <body>. */
export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
