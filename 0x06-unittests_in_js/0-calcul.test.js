const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('testing with whole numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  }); 
  
  it('test with whole and float numbers', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  }); 

  it('test with both float numbers', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('test with second number rounded', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 5);
  });
});
