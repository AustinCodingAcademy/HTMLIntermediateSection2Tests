module.exports = function() {

  this.whichSpecies = function (character) {
    // should return "dog" when character is 'scooby'
    // should return "cat" when character is 'garfield'
    // should return "fish" when character is 'nemo'
    // should return false if character is anything else
    if(character==='scooby') {
      return 'dog';
    }
    else if(character==='garfield') {
      return 'cat';
    }
    else if(character==='nemo') {
      return 'fish';
    }
    else {
      return false;
    }
  }

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
    if(number%2===0) {
      return true;
    }
  }
}
