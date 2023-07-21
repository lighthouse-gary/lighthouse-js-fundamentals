// const name = ['name', 'yearOfBirth', 'currentYear']

const ageCalculator = function (name, birth, current) {
  let age = current - birth;
  return (name + ' is ' + age + ' years ' + ' old.');
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));