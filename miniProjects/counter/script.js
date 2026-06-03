let count=0;

incrementor=document.getElementById('increment').onclick=function(){ //allows accessing incrementing button
    count++;
    document.getElementById('counter').textContent=count;// increases value of counter by 1 on webpage on everyclick
}
reseter=document.getElementById('reset').onclick=function(){ //allows accessing reseting button
    count=0;
    document.getElementById('counter').textContent=count;// resets value of counter to 0 on webpage
}

decrementor=document.getElementById('decrement').onclick=function(){ //allows accessing decrementng button
    count--;
    document.getElementById('counter').textContent=count;//decreases value of conter by 1 on eachclick on webpage
}