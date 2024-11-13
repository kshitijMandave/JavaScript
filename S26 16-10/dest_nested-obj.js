let user = {
  name: {
    first: "raj",
    last: "Varma",
  },
  address: {
    city: {
      cityName: "mumbai",
      pincode: 445785,
    },
  },
};

let {
  name: { first, last },
} = user;

console.log(first, last);

// **********************

let {
  address: {
    city: { cityName, pincode },
  },
} = user;

console.log(cityName, pincode);
