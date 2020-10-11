'use strict';


const chalk = require('chalk');
const faker = require('faker');
require('dotenv').config();

const io = require('socket.io-client')
const host = 'http://localhost:3000';
// const capsConnection = io.connect(host)

const capsNamespace = io.connect(`${host}/caps-namespace`)

capsNamespace.emit('join', process.env.STORE)


capsNamespace.on('delivered', payload => thankYou(payload))

setInterval(() => {

  let payload = {
    store: process.env.STORE,
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  capsNamespace.emit('pickup', payload);
}, 5000);

function thankYou(payload) {

  console.log(`${chalk.inverse.blueBright('Vendor:')}
  Thank you for delivering order 
  ${payload.orderId}`)

}
