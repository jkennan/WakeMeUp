const request = require('request');

let scheduledTime = null;


openCurtain = () => {
    let options = {
        access_token : '1a04faed209924df6ed3bdc02ea9bdee08be78a7',
        arg          : 'open'
    }

    request({
        url: 'https://api.particle.io/v1/devices/2b003f001747343338333633/wake',
        method: 'POST',
        json: {
            access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
            arg: "open"
        }
    })
}

exports.openCurtain = openCurtain;

exports.getScheduledTime = () => {
    if (scheduledTime = null) {
        return new Date(0);
    } else {
        return scheduledTime;
    }
}

exports.setScheduledTime = (time) => {
    scheduledTime = time;
    return scheduledTime;
}

exports.schedule = () => {
    function loop() {
        let now = new Date();
        if (now.getDate() === scheduledTime.getDate() 
            && now.getHours() === scheduledTime.getHours()
            && now.getMinutes() === scheduledTime.getMinutes()) {
                openCurtain();
            }
        now = new Date();
        let delay = 60000 - (now % 60000);
        setTimeout(loop, delay);
    }
}