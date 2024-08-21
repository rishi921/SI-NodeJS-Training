//Simple Callback Function Demo
// function doSomething(cb) {
//     console.log('Do something.....');
//     cb();
// }

// const nextStep = () => console.log("callback called");

// // doSomething(nextStep);
// //It is also possible to pass a function that receives arguments

// const calculateNameLength = (name, cb) => {
//     const length = name.length;
//     cb(length);
// }
// calculateNameLength("Rishikesh", (length) => console.log("The Length is " + length));


//Timers and Intervals;

// console.log("Before the setTime out")
// var secondsInMilliSeconds = 1000;
// setTimeout(() => console.log("A second has passed"), secondsInMilliSeconds);
// console.log('After setTimeout');

// var secondsInMilliSeconds = 1000;

// let totalExecutions = 0;
// console.log('Before setInterval');
// setInterval(() => {
//     totalExecutions++;
//     console.log(`A second has passed, this is the ${totalExecutions} execution`);
// }, secondsInMilliSeconds);
// console.log('After setInterval');

// var secondsInMilliSeconds = 1000;

// let totalExecutions = 0;
// console.log('Before setInterval');
// const handle = setInterval(() => {
//     totalExecutions++;
//     console.log(`A second has passed, this is the ${totalExecutions} execution`);

//     if (totalExecutions > 15) { clearInterval(handle) }
// }, secondsInMilliSeconds);
// console.log('After setInterval');
// if (totalExecutions > 15) { clearInterval(handle) }



//Error first callbacks
// The most common way to handle errors is to use the error first pattern.
// This patterns consists of passing an error as the first argument of the callback, and the result as the second argument.

// const doSomething = (cb) => {
//     const error = new Error("Something Went Wrong");
//     cb(error, null);
// }
// doSomething((error, result) => {
//     //error = false
//     if (error) {
//         console.log("There was an error");
//         return;
//     }
//     console.log("Result : ", result)
//     console.log("Every thing went well")
// })



//Promise Chaining
// fetch('https://api.demo.foo/vi/todo')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error('Error:', error));

// const setTimeOutPromise = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//             // reject();
//         }, time)
//     });
// }

// console.log("Before set time out promise");
// setTimeOutPromise(1000).then(() => console.log("One Second Later"));
// console.log("After set time out promise");

//Parallel Promises ------

const randomTimeOutPromise = () => {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 1000);
        setTimeout(() => {
            console.log(`Promise Resolved in ${time}ms`)
            resolve(time);
        }, time);
    })
}

//Promise.all(). The all method produces a singular promise that resolves
// once all the promises are resolved or if any of the promises are rejected

// Promise.all(
//     [randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise()
//     ]
// )
//     .then((results) => console.log("Results" + results));


// Promise.race([
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
// ]).then((result) => {
//     console.log("Result from Race : ", result);
// });

// const generatePromise = shouldFail => {
//     return new Promise((resolve, reject) => {
//         if (shouldFail) {
//             return reject(new Error("Rejected!"));
//         }
//         resolve("Success!");
//     });
// }

// generatePromise(true).then(x => console.log("Resolved ..."))
//     .catch(error => console.log("Error message : ", error));


//Using async and await
//ES2017 introduced a new way to handle asynchronous code, 
// const asyncFun = async (generateError) => {
//     if (generateError) {
//         throw new Error("Error Generated");
//     }
//     return 1;
// }
// asyncFun().then((result) => console.log(result));
// asyncFun(true).catch((error) => console.log(error.message));

//Promises
// fetch('https://api.demo.foo/v1/todo')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://api.demo.foo/v1/todo');
//         const json = await
//         response.json();
//         console.log(json);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// fetchData()

// const generatePromise = shouldFail => {
//     return new Promise((resolve, reject) => {
//         if(shouldFail) {
//             return reject(new Error("Rejected!"));
//         }
//         resolve("Success!");
//     });
// };

// generatePromise(true)
// .then(result => console.log("Result: ", result))
// .catch(error => console.log("Error message: ", error.message))
// .finally(() => console.log("Promis settled"));