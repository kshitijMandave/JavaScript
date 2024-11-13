function getDesignation(year) {
  if (year >= 0 && year <= 2) {
    console.log("you are Jounior Developer");
  } else if (year >= 2 && year <= 5) {
    console.log("you are Senior Developer");
  } else if (year >= 5 && year <= 7) {
    console.log("you are Architech");
  }
}

getDesignation(6);
