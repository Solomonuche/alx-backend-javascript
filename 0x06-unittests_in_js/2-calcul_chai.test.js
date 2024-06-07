const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('Test for basic calculator', function () {
  describe('test addition', function () {
    it('with whole numbers', function () {
        expect(calculateNumber("SUM", 1, 3)).to.equal(4);
      }); 
      
      it('with whole and float numbers', function () {
        expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
      }); 
    
      it('with both float numbers', function () {
        expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
      }); 
  });

  // Type substraction
  describe('test substration', function () {
    it('teswith whole numbers', function () {
        expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
      }); 
      
      it('with whole and float numbers', function () {
        expect(calculateNumber("SUBTRACT", 5, 3.7)).to.equal(1);
      }); 
    
      it('with both float numbers', function () {
        expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
      }); 
  });

  // Division
  describe('test division', function () {
    it('teswith whole numbers', function () {
        expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
      }); 
      
      it('with whole and float numbers', function () {
        expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
      }); 
    
      it('with both float numbers', function () {
        expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
      }); 
  });
});