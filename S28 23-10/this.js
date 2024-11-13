/*

This
----------------------------
o	It is a keyword.
o	It refers object.
o	it gives current context.

 */

//it refers global object in global space.
// console.log(this);

// function fn() {
//   //in the function it returns parent object of current
//   console.log(this);

//   function f1() {
//     console.log(this);
//   }

//   let fun = () => {
//     console.log(this);
//   };

//   f1();
//   fun();
// }

// fn();

let user = {
  name: "kshitij",
  fullname() {
    console.log(this);
    function hii() {
      console.log(this);
    }
  },
};
user.fullname.hii();
user.fullname();
