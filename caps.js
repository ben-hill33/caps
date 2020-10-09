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


events.on('pickup', payload => orderLog('pickup', payload))
events.on('en-route', payload => orderLog('en-route', payload))

function orderLog(event, payload) {
  let time = new Date();
  console.log(chalk.inverse.magenta('EVENT'),
    { event, time, payload })
}

