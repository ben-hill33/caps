'use strict';

/*
Vendor Module
Declare your store name (perhaps in a .env file, so that this module is re-usable)
Every 5 seconds, simulate a new customer order
Create a fake order, as an object:
storeName, orderId, customerName, address DONE
Emit a ‘pickup’ event and attach the fake order as payload
HINT: Have some fun by using the faker library to make up phony information
Monitor the system for events …
Whenever the ‘delivered’ event occurs
Log “thank you” to the console
*/

const uuid = require('uuid').v4;
const faker = require('faker');
require('dotenv').config();
const STORE = process.env.STORE;

const events = require('./events.js');

setInterval(() => {
  let payload = {
    storeName: STORE,
    orderId: uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  events.emit('pickup', payload);
}, 5000);

events.on('delivered', logThanks);

function logThanks(payload) {
  console.log(`Your order was delivered, thank you. ${payload.orderId}`);
}
