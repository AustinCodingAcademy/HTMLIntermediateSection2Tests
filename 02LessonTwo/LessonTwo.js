module.exports = function() {

  this.whichSpecies = function (character) {
    // should return "dog" when character is 'scooby'
    switch (character){
    	case 'scooby':
    		return "dog"
    		break;
    	case 'garfield':
    		return "cat"
    		break;
    	case 'nemo':
    		return "fish"
    		break; 
    	default: 
    		return false;
    };
    // should return "cat" when character is 'garfield'
    // should return "fish" when character is 'nemo'
    // should return false if character is anything else
  };

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
    if (number % 2 === 0){
    	return true;
    }
  }

}
