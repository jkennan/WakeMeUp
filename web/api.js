const express = require('express');
const router  = express.Router();
const action  = require('./curtain-action');

router.get('/', (req, res) => {
    res.send('API is running. Please choose a valid route.');
})

router.route('/schedule')
        .post((req,res) => {
            let b = req.body;
            if (b.scheduled) {
                let year  = b.year;
                let month = b.month;
                let day   = b.day;
                let hour  = b.hour;
                let min   = b.min; 
                
                let date = new Date(year, month, day, hours, minutes, 0, 0);
                action.setScheduledTime(date);
                action.schedule();
            } else {
                action.openCurtain();
            }
        })
        .get((req, res) => {
            let date = action.getScheduledTime();
            if (date == null) {
                res.send('No date set.');
            }
            response = {
                year  : date.getFullYear(),
                month : date.getMonth(),
                day   : date.getDate(),
                hour  : date.getHours(),
                min   : date.getMinutes()
            }

            res.send(JSON.stringify(response));
        })

module.exports = router;