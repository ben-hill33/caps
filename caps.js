'use strict';

/*
Main hub of the app
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
*/

const events = require('./events.js');