'use strict';

// Import packages.
var Alexa = require('alexa-sdk');
//var constants = require('./constants');
var intentHandlers = require('./intentHandlers');

exports.handler = function (event, context) {
    let alexa = Alexa.handler(event, context);
    //alexa.appId = constants.appId;
    alexa.registerHandlers(intentHandlers);
    alexa.execute();
};
