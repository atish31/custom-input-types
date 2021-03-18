import { customNumber as _customNumber, telephone as _telephone, pincode as _pincode } from '../../src/modules/custom-numerics/custom-numerics';
import { expect } from 'chai';


describe('Unit Testing for #customNumber()', () => {

  it('Given a number string, should return the converted number string with no alphabets', () => {

      let testData = _customNumber('54321');
      expect(testData).to.be.equal('54321');
      expect(testData).to.not.equal('54321ABCDE');

  });

  it('Given a string of alphanumeric characters, should return the string containing numbers only as it is', () => {

    let testData = _customNumber('54321QWERTY');
    expect(testData).to.be.equal('54321');
    expect(testData).to.not.equal('54321QWERTY');

  });

});

describe('Unit Testing for #telephone()', () => {

  it('Given a number string as input, should return the number as it is', () => {

    let e = {
      target: {
        value: "9876543210"
      }
    };
    let testData = _telephone(e);

  });

});
