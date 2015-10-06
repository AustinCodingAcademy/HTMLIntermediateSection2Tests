module.exports = function() {

  this.loopIt = function () {
    // should return an array with numbers 0 - 99
	 var array = [];
	  for(var i = 0; i < 100; i++){  
		  array.push(i);
	  }
	  return array;
  }

  this.onlyEvens = function () {
    // should return an array with all even numbers between 1 - 99
	  var array = [];
	  for (var i = 1; i < 100; i++){
		  if (i % 2 === 0) {
			  array.push(i);	  
		  }  
	  }
	  return array;
  }

  this.fizzBuzz = function () {
    // should return an array of numbers between 0 - 99 where the numbers
    // divisible by 3 are replaced by the string "fizz", numbers divisible by 5
    // are replaced by the string "buzz", and the numbers divisble by both 3 and
    // 5 are replaced by fizzbuzz
	  var array = [];
	  	  for(var i = 0; i < 100; i++){
	  	       if (i%3 ===0 && i%5===0) {
	  	  			  array.push("fizzbuzz");
	  	  		  } else if (i%3 === 0){
	  	  			  array.push("fizz");
	  	  		  } else if (i%5 === 0){
	  	  			  array.push("buzz");
	  	  		  } else {
	  			  array.push(i);
	  	  	      }
			  }
	  		  
	  	  return array; 	
}
}
