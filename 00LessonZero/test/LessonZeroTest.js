var assert = require('assert');
var LessonZero = require('../LessonZero');

describe('LessonZero', function() {
  var lessonZero = new LessonZero();

  describe('#returnTrue()', function () {
    it('should return true', function () {
      assert.Equal(lessonZero.returnTrue(), true);
    });
  });
});
