import { upperCase as _upperCase, lowerCase as _lowerCase, camelCase, pascalCase, snakeCase } from '../../src/modules/custom-case/custom-case';
import { expect } from 'chai';

const inputString = 'Type Customised is the simplest way to handle input tags';

describe('Unit Testing for #upperCase()', function () {

  it('converts the string case to upper case', function () {
      let upperCase = _upperCase('uppercase');
      expect(upperCase).to.be.equal('UPPERCASE');
      expect(upperCase).to.not.equal('UPPERCASe');
    }
  );

  it('converts the string case to lower case', function() {
    let lowerCase = _lowerCase('LOWERCASE');
    expect(lowerCase).to.be.equal('lowercase');
    expect(lowerCase).to.not.equal('LOWERCASE');
  });

});

describe('Unit Testing for #camelCase()', function(){

	let e;
	let attr = '';

	beforeEach(function() {
		attr = '';
		e = {
		target: {
			value: inputString,
			hasAttribute: function() {
			if(attr === 'nospace') return true;
			return false;
			}
		}
		}
	})

	it('converts the string case to camel case with space', function() {
		camelCase(e);
		expect(e.target.value).to.be.equal('type Customised Is The Simplest Way To Handle Input Tags');
		expect(e.target.value).to.not.equal(inputString);
	});

	it('converts the string case to camel case without space', function() {
		attr = 'nospace';
		camelCase(e);
		expect(e.target.value).to.be.equal('typeCustomisedIsTheSimplestWayToHandleInputTags');
		expect(e.target.value).to.not.equal(inputString);
	});

})


describe('Unit Testing for #pascalCase()', function(){

	let e;
	let attr = '';

	beforeEach(function() {
		attr = '';
		e = {
		target: {
			value: inputString,
			hasAttribute: function() {
			if(attr === 'nospace') return true;
			return false;
			}
		}
		}
	})

	it('converts the string case to camel case with space', function() {
		pascalCase(e);
		expect(e.target.value).to.be.equal('Type Customised Is The Simplest Way To Handle Input Tags');
		expect(e.target.value).to.not.equal(inputString);
	});

	it('converts the string case to camel case without space', function() {
		attr = 'nospace';
		pascalCase(e);
		expect(e.target.value).to.be.equal('TypeCustomisedIsTheSimplestWayToHandleInputTags');
		expect(e.target.value).to.not.equal(inputString);
	});

})


describe('Unit Testing for #snakeCase()', function(){

  let e;
  let attr = '';

  beforeEach(function() {
    attr = '';
    e = {
      target: {
        value: inputString,
        hasAttribute: function() {
          if(attr === 'nospace') return true;
          return false;
        }
      }
    }
  })

  it('converts the string case to camel case with space', function() {
    snakeCase(e);
    expect(e.target.value).to.be.equal('type customised is the simplest way to handle input tags');
    expect(e.target.value).to.not.equal(inputString);
  });

  it('converts the string case to camel case without space', function() {
    attr = 'nospace';
    snakeCase(e);
    expect(e.target.value).to.be.equal('type_customised_is_the_simplest_way_to_handle_input_tags');
    expect(e.target.value).to.not.equal(inputString);
  });

})
