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
    for (var i = 0; i < 100; i++) {
      if ((even[i] % 2) != 1 ) {
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
        if ((nums[i] % 3) != 1 && (nums[i] % 5) != 1) {
          // replace with fizbuzz;
          nums.push(i)= 'fizzbuzz';
        }
        if ((nums[i] % 3) != 1) {
          // replace with fizz;
          nums.push(i)= 'fizz';
        }
        if ((nums[i] % 5) != 1) {
          // replace with buzz;
          nums.push(i)= 'buzz';
        } 
    }
      return nums;   
  }
}
