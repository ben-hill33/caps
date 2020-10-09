'use strict';

const events = require('./events.js');
require('./caps.js');

// events.on('pickup', payload => pickupEvent(payload));



setInterval((event) => {

})

function pickupEvent(event, payload) {
  console.log(`DRIVER: picked up ${payload.orderId} `)
}

// As a driver, I want to be notified when there is a package to be delivered
// As a driver, I want to alert the system when I have picked up a package and it is in transit
// As a driver, I want to alert the system when a package has been delivered