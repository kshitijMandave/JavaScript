/*

**callback Function
-------------------
function which is passed as a argument is called Callback function. 

 */


function f1 (){
    console.log("f1 is called");
}

function f2 (f){
    console.log("f2 is called");
    f(); //using parameter name.
}

f2(f1); // Function Call with Callback technique. and it fill print only : f2 is called and [Function: f1]

// function passing tgrough the argument is called callBack Function.