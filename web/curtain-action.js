const http = require('http');

let scheduledTime = null;


module.exports.openCurtain = () => {
    console.log('hello');

    let body = JSON.stringify({
        access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
        arg: "open"
    })

    // let request = new http.ClientRequest({
    //     hostname: 'https://api.particle.io',
    //     path    : '/v1/devices/2b003f001747343338333633/wake',
    //     method  : 'POST',
    //     headers : {
    //         'Content-Type' : 'application/json',
    //         'Content-Length' : Buffer.byteLength(body)
    //     }
    // })

    let request = new http.ClientRequest({
        hostname: 'www.httpbin.org',
        path    : '/post',
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Content-Length' : Buffer.byteLength(body)
        }
    })

    request.end();
}

module.exports.getScheduledTime = () => {
    if (scheduledTime = null) {
        return new Date(0);
    } else {
        return scheduledTime;
    }
}

module.exports.setScheduledTime = (time) => {
    scheduledTime = time;
    return scheduledTime;
}

module.exports.schedule = () => {
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