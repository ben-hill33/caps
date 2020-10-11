'use strict';


const chalk = require('chalk');
const faker = require('faker');
const io = require('socket.io-client');
require('dotenv').config();
// const events = require('./events.js');

// const events = require('./events.js');
const port = process.env.PORT || 3000;
const capsConnection = io.connect(port)



// events.on('delivered', payload => thankYou(payload))

setInterval(() => {

  let payload = {
    store: process.env.STORE,
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  io.emit('pickup', payload);
}, 5000);

// function thankYou(payload) {

//   console.log(`${chalk.inverse.blueBright('Vendor:')}
//   Thank you for delivering order 
//   ${payload.orderId}`)

// }

