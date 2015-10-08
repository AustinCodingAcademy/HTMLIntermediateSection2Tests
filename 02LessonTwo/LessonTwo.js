module.exports = function() {

  this.whichSpecies = function (character) {
    
  	 

    // should return "dog" when character is 'scooby'
    if (character === 'scooby'){
    	return 'dog';
    }
    // should return "cat" when character is 'garfield'
    if (character === 'garfield'){
    	return 'cat';
    }
    // should return "fish" when character is 'nemo'
    if (character === 'nemo'){
    	return 'fish';
    }
    // should return false if character is anything else
	return false;
  
  }

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
    if (number % 2 === 0) {
    	return true;
    }
    	return false;
  }

}
