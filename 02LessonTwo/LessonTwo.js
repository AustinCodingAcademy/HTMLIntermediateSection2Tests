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
	  if (number % 2 == 0) {
		  return true;
	  }
	  else {
		  return false;
	  }
  }

}
