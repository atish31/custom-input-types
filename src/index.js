import {
  upperCase,
  lowerCase,
  camelCase,
  pascalCase,
  snakeCase
} from '/src/modules/custom-case/custom-case.js';

import { customNumber, telephone, pincode } from '/src/modules/custom-numerics/custom-numerics.js';
import { customText } from '/src/modules/custom-text/custom-text.js';
import { convertSnakeCaseToCamelCase } from '/src/modules/_shared/helper.js'


function init() {
  let inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    input.addEventListener('input', updateValue, {passive: true});
    initFireEvent(input);
  }

  observer.observe(document.body, {
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true
  });
}

function updateValue(e) {
  const type = convertSnakeCaseToCamelCase(e.target.getAttribute('type'));
  switch (type) {
    case 'customNumber':
      e.target.value = customNumber(e.target.value);
      break;
    case 'customText':
      customText(e);
      break;
    case 'lowerCase':
      e.target.value = lowerCase(e.target.value);
      break;
    case 'upperCase':
      e.target.value = upperCase(e.target.value);
      break;
    case 'camelCase':
      camelCase(e);
      break;
    case 'pascalCase':
      pascalCase(e);
      break;
    case 'snakeCase':
      snakeCase(e);
      break;
    case 'phone':
      telephone(e);
      break;
    case 'pincode':
      pincode(e);
      break;
  }
}

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
      if (mutation.oldValue !== mutation.target.value) {
        initFireEvent(mutation.target)
      }
    }
    if (mutation.addedNodes.length) {
      if (mutation.addedNodes[0].localName === 'input')
        mutation.addedNodes[0].addEventListener('input', updateValue, {
          passive: true,
        });
    }

    if (mutation.removedNodes.length) {
      if (mutation.removedNodes[0].localName === 'input')
        mutation.removedNodes[0].removeEventListener('input', updateValue);
    }
  });
});


function initFireEvent(element) {
  if ('createEvent' in document) {
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('input', false, true);
    element.dispatchEvent(evt);
  } else {
    let evt = document.createEventObject();
    element.fireEvent('oninput', evt);
  }
}

document.addEventListener('readystatechange', (event) => {
  if (document.readyState === 'complete') {
    init();
  }
});


(function (elementExample, Object, window) {
  function createIDLSetWrapper(key, nativeSet, nativeGet) {
    return function (newValue) {
      let oldValue = this.getAttribute(key);
      nativeSet.call(this, newValue);

      if (this.getAttribute(key) === oldValue) {
        this.setAttribute(key, nativeGet.call(this));
      }
    };
  }

  let ownProps = Object.getOwnPropertyNames(window);
  for (let i = 0, len = ownProps.length | 0, key; i < len; i = i + 1 | 0) {
    key = ownProps[i];
    if (/^HTML[A-Z]\w*Element$/.test(key) && window.hasOwnProperty(key) && !window.propertyIsEnumerable(key) && typeof window[key] === 'function') (function () {
      let oldDescriptors = Object.getOwnPropertyDescriptors(window[key].prototype);
      let keys = Object.keys(oldDescriptors);
      let newDescriptors = {};

      for (let i = 0, len = keys.length | 0, prop, description; i < len; i = i + 1 | 0) {
        prop = keys[i];
        description = oldDescriptors[prop];
        if (
          prop !== 'nonce' &&
          (!prop.startsWith('on') || elementExample[prop] !== null) &&
          typeof description.set === 'function' &&
          description.set.toString().indexOf('[native code]') !== -1
        ) newDescriptors[prop] = {
          configurable: true,
          enumerable: true,
          get: description.get,
          set: createIDLSetWrapper(prop, description.set, description.get)
        };
      }
      Object.defineProperties(window[key].prototype, newDescriptors);
    })();
  }
})(document.firstElementChild, Object, window);
