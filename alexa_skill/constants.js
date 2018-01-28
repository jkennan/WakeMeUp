'use strict';

module.exports = Object.freeze({
    // APP-ID from developer portal.
    appId : 'amzn1.ask.skill.61072f05-8106-41a7-a018-3c2181fbc837',

    strings : {
        WELCOME_MESSAGE: 'Welcome to Rise. What time would you like me '
                      + 'to wake you up?',
        WELCOME_REPROMPT: 'What time would you like me to wake you up?',
        HELP_MESSAGE: 'You can ask me to wake you up at a certain time. For '
                    + 'example, you can say, Wake me up at 8:00 a.m. If '
                    + 'you\'d like to turn off the alarm, you can also say, '
                    + 'Go back to sleep, or Turn off. '
                    + 'What would you like to do?',
        STOP_MESSAGE: 'Goodbye!',
        UNHANDLED_MESSAGE: 'Sorry, I could not understand. Please try again.',
        TIME_SET: 'Your time has been set to ',
        SLEEP_MESSAGE: 'Alright, goodnight!'
    }
})
