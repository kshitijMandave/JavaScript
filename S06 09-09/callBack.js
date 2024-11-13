function f1 (){
    console.log("I am callBack fucntion");
};

function f2 (f){
    console.log("I'm a function");
    console.log(f());
};

f2(f1); //function call with call back function f1.