/*let count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
console.log(countValue);*/
/*// returns a promise
let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
// executes when promise is resolved successfully
countValue
    .then(function successValue(result) {
      console.log(result);
    })
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });
*/
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 )

 /* returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);*/