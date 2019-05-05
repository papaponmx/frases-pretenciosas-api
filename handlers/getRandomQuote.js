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
  console.log('DQTP', quote); // eslint-disable-line
  return {
    body: JSON.stringify({
      quote,
    }),
    statusCode: 200,
  };
};

