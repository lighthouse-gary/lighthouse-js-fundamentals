const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i =0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

let i =0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for(let i = 0; i < ingredients.length; i++) {
  reversedIngredients = ingredients.reverse();
  console.log(reversedIngredients[i]);
}