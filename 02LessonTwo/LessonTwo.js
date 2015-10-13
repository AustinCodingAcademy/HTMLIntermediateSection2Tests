module.exports = function() {

  this.whichSpecies = function (character) {
  	if (character === 'scooby') {
  		return 'dog';
  	}
  	if (character === 'garfield') {
  		return 'cat';
  	}
  	if (character === 'nemo') {
  		return 'fish'
  	}
  	return false;
    // should return "dog" when character is 'scooby'
    // should return "cat" when character is 'garfield'
    // should return "fish" when character is 'nemo'
    // should return false if character is anything else
  }

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
    if (number % 2 === 0) {
    	return true;
    }
    	return false;
  }

}
