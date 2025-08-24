// This file exports the handler for the Netlify serverless function. It
// simply re-exports the handler defined in the root `analyze.js`. Having
// this file in the `netlify/functions` directory ensures Netlify picks up
// the function correctly based on the `functions` configuration in
// `netlify.toml`. The logic remains unchanged.

const { handler } = require('../../analyze.js');

exports.handler = handler;