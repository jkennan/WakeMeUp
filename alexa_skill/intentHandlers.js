'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var http = require('http');
var datetime = require('node-datetime');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html`);
const $ = require('jquery')(window);

let dt = datetime.create();
dt.offsetInDays(1);

console.log(dt);

var intentHandlers = {
    'LaunchRequest': function () {
      const welcomeMessage = constants.strings.WELCOME_MESSAGE;
      const welcomeReprompt = constants.strings.WELCOME_REPROMPT;
      this.emit(':ask', welcomeMessage, welcomeReprompt);
    },

    'SetTimeIntent': function () {
      let timeSlot = this.event.request.intent.slots.time;
      if (timeSlot && timeSlot.value) {

        let dt = new Date();
        let hours = dt.getHours();
        let mins = dt.getMinutes();
        let inputHours = JSON.stringify(timeSlot.value).slice(0, 3);
        let inputMins = JSON.stringify(timeSlot.value).slice(4, 6);
        let year = dt.getFullYear();
        let month = dt.getMonth();
        let day = dt.getDay();
        if (inputHours < hours || (inputHours == hours && inputMins < mins)) {
          // Use tomorrow's date
          let dt = datetime.create();
          dt.offsetInDays(1);
          year = JSON.stringify(dt._now).slice(0, 4);
          month = JSON.stringify(dt._now).slice(5, 7);
          day = JSON.stringify(dt._now).slice(8, 10);
        }

        var body = JSON.stringify({
            hour: inputHours,
            min: inputMins,
            year: year,
            month: month,
            day: day,
            scheduled: false,
        })

        // var request = new http.ClientRequest({
        //     hostname: constants.strings.SITE,
        //     port: constants.port,
        //     path: '/api/schedule',
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Content-Length": Buffer.byteLength(body)
        //     }
        // });
        // request.end(body);
        // request.on('response', function (response) {
        //   console.log('STATUS: ' + response.statusCode);
        //   console.log('HEADERS: ' + JSON.stringify(response.headers));
        //   response.setEncoding('utf8');
        //   response.on('data', function (chunk) {
        //     console.log('BODY: ' + chunk);
        //   });
        // });
    
        $.post("https://api.particle.io/v1/devices/2b003f001747343338333633/wake", {
            access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
            arg: "open"
        }, (data, status) => {console.log(data); console.log(status)});

        this.emit(':tell', constants.strings.TIME_SET + timeSlot.value);
      } else {
        this.emit(':tell', constants.strings.UNHANDLED_MESSAGE);
      }
    },

    'EnterTimeIntent': function () {
      let timeSlot = this.event.request.intent.slots.time;
      if (timeSlot && timeSlot.value) {

        let dt = new Date();
        let hours = dt.getHours();
        let mins = dt.getMinutes();
        let inputHours = JSON.stringify(timeSlot.value).slice(0, 3);
        let inputMins = JSON.stringify(timeSlot.value).slice(4, 6);
        let year = dt.getFullYear();
        let month = dt.getMonth();
        let day = dt.getDay();
        if (inputHours < hours || (inputHours == hours && inputMins < mins)) {
          // Use tomorrow's date
          let dt = datetime.create();
          dt.offsetInDays(1);
          year = JSON.stringify(dt._now).slice(0, 4);
          month = JSON.stringify(dt._now).slice(5, 7);
          day = JSON.stringify(dt._now).slice(8, 10);
        }

        var body = JSON.stringify({
            hour: inputHours,
            min: inputMins,
            year: year,
            month: month,
            day: day,
            scheduled: false,
        })

        // var request = new http.ClientRequest({
        //     hostname: constants.strings.SITE,
        //     port: constants.port,
        //     path: '/api/schedule',
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Content-Length": Buffer.byteLength(body)
        //     }
        // });
        // request.end(body);
        // request.on('response', function (response) {
        //   console.log('STATUS: ' + response.statusCode);
        //   console.log('HEADERS: ' + JSON.stringify(response.headers));
        //   response.setEncoding('utf8');
        //   response.on('data', function (chunk) {
        //     console.log('BODY: ' + chunk);
        //   });
        // });
    
        $.post("https://api.particle.io/v1/devices/2b003f001747343338333633/wake", {
            access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
            arg: "open"
        }, (data, status) => {console.log(data); console.log(status)});
      
        this.emit(':tell', constants.strings.TIME_SET + timeSlot.value);
      } else {
        this.emit(':tell', constants.strings.UNHANDLED_MESSAGE);
      }
    },

    'SleepIntent': function () {
      $.post("https://api.particle.io/v1/devices/2b003f001747343338333633/wake", {
          access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
          arg: "off"
      }, (data, status) => {console.log(data); console.log(status)});
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
