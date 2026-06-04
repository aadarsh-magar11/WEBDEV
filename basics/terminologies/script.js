// call back hell = situation in javascript where callbacks 
//                  are nested within order callbacks to the 
//                  degreee where the code is difficult to read.
//                  old patterns to handle asynchronous functions.
// USE PROMISES + ASYNC/AWAIT TO AVOID CALLBACK HEll

//synchronous functions dont create callback hell
// function task1() {
//     console.log("task 1 completed");
// }

// function task2() {
//     console.log("task 2 completed");
// }

// function task3() {
//     console.log("task 3 completed");
// }

// function task4() {
//     console.log("task 4 completed");
// }

// task1();
// task2();
// task3();
// task4();

// console.log("all tasks completed");
// in this code is ran line by line


//asynchronous functions
// ends in order like task 2, 4 ,1 ,3 completed
function task1(callback) {

    setTimeout(() => {
        console.log("task1 completed");
        callback();
    }, 2000);
}

function task2(callback) {

    setTimeout(() => {
        console.log("task2 completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("task3 completed");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("task4 completed");
        callback();
    }, 1500);
}

//to manage the order we use callback hell

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("all tasks completed");
            })
        })
    })
})
// now the functions are called in order
