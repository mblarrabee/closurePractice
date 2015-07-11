//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

console.log(inner());



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callJake = callFriend();
console.log(callJake("435-215-9248"));


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  function makeCounter(){
    var counter = 0;
    return function(){
      return ++counter;
    };
  };

  //Code Here
  var count = makeCounter();
  console.log(count()); // 1
  console.log(count()); // 2
  console.log(count()); // 3
  console.log(count()); // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');



*/
  //This works, but only for the function explicitly defined by runIt
function simpleFunc(){
  console.log("The function executed");
};

function runNTimes(passedFunc, N){
  return function(){
    for(var i = N; i > 0; i--){
        passedFunc();
    };
    console.log("The function has already been executed " + N + " times.");
  };
};

var runIt = runNTimes(simpleFunc, 33);

runIt(simpleFunc);




function simpleFunc(){
  console.log("The function executed");
};

function simpleFunc2(){
  console.log("The 2nd function executed");
};

function simpleFunc3(){
  console.log("The 3rd function executed");
};

function simpleFunc4(){
  console.log("The 4th function executed");
};


//This works for ANY function passed into it and will only allow it to run one time.

function runOnce(passedFunc){
  if(!passedFunc.alreadyran){
    passedFunc();
    passedFunc.alreadyran = true;
  }
  else{
    console.log("The function has already been executed");
  };
};



