module.exports = function() {

  this.returnTrue = function () {
    // should return true
    return true;
  }

  this.returnFalse = function() {
    // should return false
    return false;
  }

  this.greaterThan = function (big, small) {
    // should return true if the first argument is greater than the second argument
    // and return false if the first argument is less than the second argument
    return big > small;
  }

  this.lessThan = function (small, big) {
    // should return true if the first argument is less than the second argument
    // and return false if the first argument is greater than the second argument
    return small < big;
  }

  this.equalTo = function (a, b) {
    // should return true if the first argument is equal to the second argument
    // and should return true if the first argument is equal to the second argument
    return a === b;
    return b === a;
  }

  this.notEqualTo = function (a, b) {
    // should return true if the first argument is not equal to the second argument
    // and should return false if the first argument is equal to the second argument
    return a !== b;
    return b !== a;
  }
}
