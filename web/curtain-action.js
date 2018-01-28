
const https = require('https');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html`);
const $ = require('jquery')(window);

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

    // let request = new http.ClientRequest({
    //     hostname: 'www.httpbin.org',
    //     path    : '/post',
    //     method  : 'POST',
    //     headers : {
    //         'Content-Type' : 'application/json',
    //         'Content-Length' : Buffer.byteLength(body)
    //     }
    // })

    // $.post("www.httpbin.org/post",
    //     {

    // let request = new https.request({
    //     hostname: 'api.particle.io',
    //     path    : '/v1/devices/2b003f001747343338333633/wake',
    //     port    : '443',
    //     method  : 'POST',
    //     headers : {
    //         'Content-Type' : 'application/json',
    //         'Content-Length' : body.length,
    //         accept : '*/*'
    //     }
        
    // }, (res) => console.log(res))

    $.post("https://api.particle.io/v1/devices/2b003f001747343338333633/wake", {
        access_token: "1a04faed209924df6ed3bdc02ea9bdee08be78a7",
        arg: "open"
    }, (data, status) => {console.log(data); console.log(status)});
    // request.write(body);
    // request.end(() => console.log('really done'));
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