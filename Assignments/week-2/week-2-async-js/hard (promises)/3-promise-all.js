function sleep(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    });
}

function wait1(t) {
    return sleep(t).then(() => {
        console.log("hello1");
    });
}

function wait2(t) {
    return sleep(t).then(() => {
        console.log("hello2");
    });
}

function wait3(t) {
    return sleep(t).then(() => {
        console.log("hello3");
    });
}

function calculateTime(t1, t2, t3) {
    console.log("hello start");
    let then = new Date().getTime();

    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
        let now = new Date().getTime();
        return now - then;
    });
}

calculateTime(1, 2, 3).then((time) => {
    console.log(`Total time: ${time} ms`);
});
