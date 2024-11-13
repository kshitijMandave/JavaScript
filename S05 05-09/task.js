const multiply = function (a, b) {
  return a * b;
};


console.log(multiply(5, 10)); //  it will print value of a*b
console.log(5, 10); // it will print 5,10 only.
console.log(multiply); // it will print function only cuase we are not calling here (): note without paranthesis we can't call the function.

function pritnOutput (){
  console.log("Ram Is my friend");
};


/*In JavaScript whenever we call function, by defualt it returns undefiend value*/
console.log(pritnOutput()) // it will return undefined