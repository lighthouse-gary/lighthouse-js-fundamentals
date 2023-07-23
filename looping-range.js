function range(start, end, step) {
  let goodArray = [];

  for (let x = start; x <= end; x = x + step) {
    if (step < 0) {
      break;
    }

    else if (end < start) {
      break;
    }

    let num = x;
    goodArray.push(num);
  }

  return goodArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));