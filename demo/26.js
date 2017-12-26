// node-progress 进度条

var ProgressBar = require('progress');

var bar = new ProgressBar('progress: [:bar]', { total: 66, width: 20, complete: '=' });


var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);
