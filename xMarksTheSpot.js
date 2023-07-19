const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

//return arrow if final position starting from [0.0]

const finalPosition = function(moves) {
  const location = [0, 0];

  for (let move of moves) {
    if (move === 'north') {
      location[1]++;
    }

    if (move === 'east') {
      location[0]++;
    }

    if (move === 'south') {
      location[1]--;
    }

    if (move === 'west') {
      location[0]--;
    }
  }

  // console.log(location);
  return location;
};

finalPosition(moves);