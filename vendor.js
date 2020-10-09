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

// As a vendor, I want to alert the system when I have a package to be picked up
// As a vendor, I want to be notified when my package has been delivered

// const uuid = require('uuid').v4;
const faker = require('faker');
require('dotenv').config();
// const STORE = process.env.STORE;

const events = require('./events.js');

// events.on('pickup', payload => vendorLog('pickup', payload))


setInterval(() => {

  let payload = {
    store: process.env.STORE,
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  events.emit('pickup', payload);
  // console.log(payload)
}, 5000);



