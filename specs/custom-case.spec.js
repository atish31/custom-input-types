let customCase = require('../src/modules/custom-case/custom-case.js');
let expect = require('chai').expect;

describe('Customize the string case', function () {
  it('converts the string case', function () {
      let upperCase = customCase.upperCase('uppercase');
      expect(upperCase).to.be.equal('UPPERCASE');
      expect(upperCase).to.not.equal('UPPERCASe');
    }
  );
})
