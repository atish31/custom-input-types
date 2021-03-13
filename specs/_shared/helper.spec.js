import { convertSnakeCaseToCamelCase as _convertSnakeCaseToCamelCase } from '../../modules/_shared/helper';
import { expect } from 'chai';


describe('Unit Testing for #convertSnakeCaseToCamelCase()', () => {

  it('Given a string of snake_case, should return converted camelCase of the same', () => {

      let testData = _convertSnakeCaseToCamelCase('kebab_case');
      expect(testData).to.be.equal('kebabCase');
      expect(testData).to.not.equal('kebab_case');

  });

  it('Given a string of non snake_case, should return the string as it is', ()=>{

    let testData = _convertSnakeCaseToCamelCase('camelCase');
    expect(testData).to.be.equal(testData);
    expect(testData).to.not.equal('camel_case');

  });

});
