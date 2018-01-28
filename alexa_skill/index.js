'use strict';

// Import packages.
var Alexa = require('alexa-sdk');
var intentHandlers = require('./intentHandlers');

exports.handler = function (event, context) {
    let alexa = Alexa.handler(event, context);
    alexa.registerHandlers(intentHandlers);
    alexa.execute();
};
