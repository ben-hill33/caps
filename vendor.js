'use strict';


const chalk = require('chalk');
const faker = require('faker');
require('dotenv').config();

const events = require('./events.js');

events.on('delivered', payload => thankYou(payload))

setInterval(() => {

  let payload = {
    store: process.env.STORE,
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  events.emit('pickup', payload);
}, 5000);

function thankYou(payload) {

  console.log(`${chalk.inverse.blueBright('Vendor:')}
  Thank you for delivering order 
  ${payload.orderId}`)

}

