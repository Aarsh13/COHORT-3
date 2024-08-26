/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let now= new Date().getTime();
    while(new Date().getTime() < now + milliseconds)
        {
            // do nothing
        };
    return  Promise.resolve();
}

console.log("Start");

let p= sleep(5000);

console.log("End");
