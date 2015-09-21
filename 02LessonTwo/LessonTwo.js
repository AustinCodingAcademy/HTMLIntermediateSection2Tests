module.exports = function() {

	this.whichSpecies = function (character) {
		  if (character === "scooby") {
			  return "dog";
		  } 
		  if (character === "garfield") {
			  return "cat";
		  }
		  if (character === "nemo") {
			  return "fish";
		  } else {
			  return false;
		  }
	  };

  this.isEven = function (number) {
    // should return true is number is even (divisible by 2)
	  if (number % 2 == 0) {
		  return true;
	  }
	  else {
		  return false;
	  }
  }

}
