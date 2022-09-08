const food = ['apple', 'pizza', 'pear']

console.log(food[1])



const finalPosition = function (moves) {
  // Your code in here ...
  var position = [0,0];
  for (var move of moves) {
    switch(move) {
      case('north'):
        position[1]++;
        break;
      case('south'):
        position[1]--;
        break;
      case('east'):
        position[0]++;
        break;
      case('west'):
        position[0]--;
        break;
    }
  }
  return position
;};