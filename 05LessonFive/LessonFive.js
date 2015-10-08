this.loopIt = function () {
     // should return an array with numbers 0 - 99
    var arr = [];

    for(var i = 0; i < 100; i++){
      arr.push(i);
    }
    return arr;
   }

   this.onlyEvens = function () {
     // should return an array with all even numbers between 1 - 99
    var arrEven = [];
 
    for( j = 2; j < 100; j++){
        if (j % 2 === 0) {
      arrEven.push(i);
    }
  }
    return arrEven;
  }
 
   this.fizzBuzz = function () {
    var arrFB = [];

    for(k = 0; k < 100; k++){
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