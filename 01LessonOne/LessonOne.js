module.exports = function() {

  this.returnTrue = function () {
    return true;

  }

  this.returnFalse = function() {
    return false;

  }

  this.greaterThan = function (big, small) {
    // should return true if the first argument is greater than the second argument
    if(big>small) {return true;}
    // and return false if the first argument is less than the second argument
    else {return false;}

  }

  this.lessThan = function (small, big) {
    // should return true if the first argument is less than the second argument
    if (small<big) {return true;}
    // and return false if the first argument is greater than the second argument
    else {return false;}

  }

  this.equalTo = function (a, b) {
    // should return true if the first argument is equal to the second argument
    // and should return true if the first argument is equal to the second argument
    return a === b;

  }

  this.notEqualTo = function (a, b) {
    // should return true if the first argument is not equal to the second argument
    // and should return false if the first argument is equal to the second argument
    return a!==b;
  }
}
