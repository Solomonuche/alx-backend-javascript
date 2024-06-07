const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test for basic calculator', function () {
  describe('test addition', function () {
    it('testing with whole numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
      }); 
      
      it('test with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
      }); 
    
      it('test with both float numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
      }); 
  });

  // Type substraction
  describe('test substration', function () {
    it('testing with whole numbers', function () {
        assert.strictEqual(calculateNumber("SUBSTRACT", 1, 3), -2);
      }); 
      
      it('test with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("SUBSTRACT", 5, 3.7), 1);
      }); 
    
      it('test with both float numbers', function () {
        assert.strictEqual(calculateNumber("SUBSTRACT", 5.2, 3.7), 1);
      }); 
  });

  // Division
  describe('test division', function () {
    it('testing with whole numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
      }); 
      
      it('test with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 8, 3.7), 2);
      }); 
    
      it('test with both float numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 4.2, 0), "Error");
      }); 
  });
});