// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getTime() {
    let now = new Date();
    let time=0;   
    

    if(now.getHours()>12)
    {
        time=(now.getHours()-12)+":"+now.getMinutes()+":"+now.getSeconds()+" PM";
    }
    
    else
    {
        time=(now.getHours())+":"+now.getMinutes()+":"+now.getSeconds()+" AM";
    }
     console.clear();
    console.log(time);
    
}

setInterval(getTime, 1000);
