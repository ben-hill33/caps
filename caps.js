'use strict';

/*
Main hub of the app
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
*/
const chalk = require('chalk')

const events = require('./events.js');
require('./vendor.js');
require('./driver.js');


events.on('pickup', payload => vendorLog('pickup', payload))


events.emit('pickup', payload => vendorLog('pickup', payload))


function vendorLog(event, payload) {
  let time = new Date();
  console.log(chalk.inverse.yellowBright('EVENT'), { event, time, payload })
}

