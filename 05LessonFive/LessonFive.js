module.exports = function() {

  this.loopIt = function () {
    // should return an array with numbers 0 - 99
    var arr = [];
    for (var i = 0; i < 100; i++) {
      arr.push(i);
    }
    return arr;
  }

  this.onlyEvens = function () {
    // should return an array with all even numbers between 1 - 99
    var even = [];
    for (var i = 1; i < 100; i++) {
      if (i % 2 === 0 ) {
        even.push(i);
      } 
    }
    return even;
  }

  this.fizzBuzz = function () {
    // should return an array of numbers between 0 - 99 where the numbers
    // divisible by 3 are replaced by the string "fizz", numbers divisible by 5
    // are replaced by the string "buzz", and the numbers divisble by both 3 and
    // 5 are replaced by fizzbuzz
    var nums = [];
    for (var i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          // replace with fizbuzz;
          nums.push('fizzbuzz');
        }
        else if (i % 3 === 0) {
          // replace with fizz;
          nums.push('fizz');
        }
        else if (i % 5 === 0) {
          // replace with buzz;
          nums.push('buzz');
        } 
        else {
          nums.push(i);
        }
    }
      return nums;   
  }
}
