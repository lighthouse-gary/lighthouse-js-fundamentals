let bottles = 10000000;
let crate = bottles / 100;

let howManyHundreds = function(bottles) {
  if (bottles < 100) {
    console.log(0);
    return 0;
  }

  else if (bottles % 100 === 0) {
    console.log(crate);
    return crate;

  }
}

howManyHundreds(bottles);