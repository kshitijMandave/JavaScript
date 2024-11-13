/*

Rest Parameter
--------------------
1. it is a Parameter.
2. It holds extra arguments which don't have their own named parameters.

 */

function f1(...restpara) {
  console.log("f1 is called");
  restpara.forEach((element) => {
    console.log(element);
  });
}

f1("Raj", "Kshitij", "Himanshu");
