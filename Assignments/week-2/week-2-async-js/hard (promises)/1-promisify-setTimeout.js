// Modified function that takes a parameter for the delay in seconds

function setTimeoutPromisified(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n*1000);
    });
}


function hello() {
    console.log("hello");
}


let p = setTimeoutPromisified(5).then(hello); 
