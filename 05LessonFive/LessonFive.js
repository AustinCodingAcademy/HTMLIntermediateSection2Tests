module.exports = function() {

  this.loopIt = function () {
    // should return an array with numbers 0 - 99

    var arr = [];

    for (i = 0; i < 100; i++){
      arr.push(i);
    }
    return arr;
  }

  this.onlyEvens = function () {
    // should return an array with all even numbers between 1 - 99
    var arr2 = [];

    for (j = 1; j < 100; j++){
      if (j % 2 === 0){
        arr2.push(j);
      }

    }
    return arr2;    

  }

  this.fizzBuzz = function () {
    // should return an array of numbers between 0 - 99 where the numbers
    // divisible by 3 are replaced by the string "fizz", numbers divisible by 5
    // are replaced by the string "buzz", and the numbers divisble by both 3 and
    // 5 are replaced by fizzbuzz

    var arr3 = [];

    for (k = 0; k < 100; k++){
      if (k % 3 === 0 && k % 5 === 0){
        arr3.push('fizzbuzz');
      }
        else if (k % 3 === 0){
          arr3.push('fizz');
      }
        else if (k % 5 === 0){
          arr3.push('buzz')
      }
        else {
          arr3.push(k);
      }
    }
    return arr3;    

  }
}
