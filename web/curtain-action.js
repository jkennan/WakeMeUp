let scheduledTime = null;


exports.openCurtain = () => {
    console.log('Opening Curtain');
}

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