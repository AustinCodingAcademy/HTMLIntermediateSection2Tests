module.exports = function() {

  this.buildArray = function (first, second, third) {
    // return array with the items first, second, and third in an array.
  return var arr = ['first', 'second', 'third'];
  }

  this.returnThirdItem = function (arr) {
    // should return the third item in the array
  console.log(arr[2]);
  }

  this.setFirstItem = function (arr, newFirstItem) {
    // should set the first item in the array with newFirstItem
    arr[0] = "newFirstItem";
  }

  this.returnCenterItem = function(fiveByFiveArray) {
    // returns the "center" item in a 5 x 5 array
    // ex. 3 x 3 array [[1, 2, 3], [4, 5, 6], [7, 8, 9]] the center item is 5
    var fiveByFiveArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9,], [10, 11, 12], [13, 14, 15]];
    console.log(fiveByFiveArray[2]);
  }

  this.arrayJoin = function(arr) {
    // should return a string of the joined array items, separated by a space
    var myVar1 = arr.join(', ');
  }

  this.stringSplit = function(str) {
    var strArray = str.split('');
  }

}
