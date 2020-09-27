'use strict';

// Singleton exports one instance shared by all modules

const GlobalEvents = require('events');
const events = new GlobalEvents

module.exports = events;