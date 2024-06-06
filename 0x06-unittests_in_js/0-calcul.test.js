const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Should return sum', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  }); 
  
  it('Should return sum', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  }); 

  it('Should return sum', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  }); 

  it('Should return sum', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  }); 
});
