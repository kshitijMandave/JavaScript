const product = {
  name: "Laptop",
  price: 1200,
  specifications: {
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
  manufacturer: {
    name: "TechCorp",
    country: "USA",
    warranty: {
      duration: "2 years",
      type: {
        A: "l",
        B: "l",
      },
    },
  },
};

let {
  manufacturer: {
    warranty: {
      type: { A },
    },
  },
} = product;

console.log(A);
