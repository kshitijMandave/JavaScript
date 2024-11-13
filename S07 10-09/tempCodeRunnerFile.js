/*

Nested Measns:
----------------
Object Inside the Object.

*/

var product = {
    pname: "Iphone 16 pro",
    price: 17000,
    rating: {
        count: 2345,
        rate:4.7,
    },
};

var data = product.rating.count;
console.log(data); // this will returns a object with contain count and rate


/*

IMP Questions.
What is the difference between sq. and dot notation.

*/