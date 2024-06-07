const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test for basic calculator', function () {
  describe('test addition', function () {
    it('with whole numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
      }); 
      
      it('with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
      }); 
    
      it('with both float numbers', function () {
        assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
      }); 
  });

  // Type substraction
  describe('test substration', function () {
    it('teswith whole numbers', function () {
        assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
      }); 
      
      it('with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("SUBTRACT", 5, 3.7), 1);
      }); 
    
      it('with both float numbers', function () {
        assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
      }); 
  });

  // Division
  describe('test division', function () {
    it('teswith whole numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
      }); 
      
      it('with whole and float numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
      }); 
    
      it('with both float numbers', function () {
        assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
      }); 
  });
});