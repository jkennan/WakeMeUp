'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

var intentHandlers = {
    'LaunchRequest': function () {
      const welcomeMessage = constants.strings.WELCOME_MESSAGE;
      const welcomeReprompt = constants.strings.WELCOME_REPROMPT;
      this.emit(':ask', welcomeMessage, welcomeReprompt);
    },

    'SetTimeIntent': function () {
      let timeSlot = this.event.request.intent.slots.time;
      if (timeSlot && timeSlot.value) {
        this.emit(':tell', constants.strings.TIME_SET + timeSlot.value);
      } else {
        this.emit(':tell', constants.strings.UNHANDLED_MESSAGE);
      }
    },

    'SleepIntent': function () {
      this.emit(':tell', constants.strings.SLEEP_MESSAGE);
    },

    'AMAZON.HelpIntent': function () {
      this.emit(':ask', constants.strings.HELP_MESSAGE);
    },

    'AMAZON.CancelIntent': function () { this.emit(':tell', constants.strings.STOP_MESSAGE) },

    'AMAZON.StopIntent': function () { this.emit(':tell', constants.strings.STOP_MESSAGE) },

    'Unhandled': function() { this.emit(':tell', constants.strings.UNHANDLED_MESSAGE)}
};

module.exports = intentHandlers;
