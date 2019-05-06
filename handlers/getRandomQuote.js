'use strict';

const { getRandomQuote } = require('../controllers/quoteManager');

/**
 * getRandomQuote
 * 
 * Method: GET
 * URL: {APP_URL}/api/random
 *
 */

module.exports.handler = async (event) => {
  const quote = await getRandomQuote(event);
  return {
    body: JSON.stringify({
      quote,
    }),
    statusCode: 200,
  };
};

