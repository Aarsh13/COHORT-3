/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function sleep(t)
{
    let now= new Date().getTime()
    
    while(now+t*1000> new Date().getTime())
    {
        //do nothing
    }
    return Promise.resolve();    

}

function wait1(t) {
    sleep(t);    
    console.log("hello1 ") 
    return Promise.resolve()

}

function wait2(t) {
    
    sleep(t);
    console.log("hello2 ");     
    return Promise.resolve()

}

function wait3(t) {
    sleep(t);
    console.log("hello3")
    return Promise.resolve()

}

function calculateTime(t1, t2, t3) {
    console.log("hello start")
    let then= new Date().getTime();
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    let now= new Date().getTime();
    return (now-then);


}

let p=calculateTime(1,2,3);
console.log(p);


