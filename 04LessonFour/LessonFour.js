module.exports = function() {

  this.arrayPop = function (arr) {
    // should remove the last item in the array, then return the arr
        arr.pop();
        return arr;
  }

  this.arrayPush = function (arr, item1, item2, item3) {
    // should add these items onto the end of the array, then return the array
      var arrArray = [arr.toString()];
       arrArray.push(item1, item2, item3);
       return arrArray;
  }

  this.arrayShift = function (arr) {
    // should remove the first item in the array, then return the array
        arr.shift();
        return arr;

  }

  this.arrayUnshift = function (arr, item1, item2, item3) {
    // should add these items onto the front of the array, then return the array
      var usArray = [arr.toString()];
      usArray.unshift(item1, item2, item3);
      return usArray;

  }

  this.createObject = function() {
    // should return an object with keys 'first', 'second', 'third' mapped to
    // values 1, 2, 3
      var Keys = {
        'a': 1,
        'b': 2,
        'c': 3
      };
      return Keys;

  }

  this.returnValueByKey = function(object, key) {
    // given an object and a key, return the value assigned to the key
      return object[key];
  }

  this.assignKeyValue = function(object, key, value) {
    // given an object, key, and value, add the key/value pair
    // to the object. return the object
    object.key = value;
    return object;

  }
}