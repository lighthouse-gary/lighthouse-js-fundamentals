let whichschool = function(age) {
  if (age < 13) {
    return "Elementay school";
  }

  if (age <= 18 && age >= 13) {
    return "Secondary School";
  }

  return "Lighthouse Labs";

};

console.log(whichschool(10));
console.log(whichschool(17));
console.log(whichschool(21));