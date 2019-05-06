
const boom = require('boom');
const mongoose = require('mongoose');
const Quote = require('../models/Quote');

require('dotenv').config();
const { MONGO_DB_URL } =  process.env; // MongoDB Url

/**
* DB Commands
*/

mongoose.Promise = Promise;

const dbExecute = (db, fn) => db.then(fn).finally(() => null);

const dbConnectAndExecute = (MONGO_DB_URL, fn) => {
  return dbExecute(mongoose.connect(MONGO_DB_URL, { useMongoClient: true }), fn);
};


// Get random quote 
exports.getRandomQuote = async () => {
  try {
    const quote = await
    dbConnectAndExecute(MONGO_DB_URL, () => (
      Quote
        .findOne({})
    ));
    return quote;
  } catch (err) {
      console.log('Shit nigga', err); // eslint-disable-line
    throw boom.boomify(err);
  }  
};
  
// TODO: Add functions
// Add a new Quote
// Delete a Quote
// Get all quotes
// Get single Quote by ID
// Like 
// Update an existing Quote
// Update likes to quote