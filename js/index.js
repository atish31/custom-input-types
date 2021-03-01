function startScript() {
  var inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.value = "Hello how are you 123";
    input.addEventListener("input", updateValue, { passive: true });
    // overrideInputs(input);
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
  const type = e.target.getAttribute("type");
  switch (type) {
    case "customNumber":
      customNumber(e);
      break;
    case "customText":
      customText(e);
      break;
    case "lowerCase":
      lowerCase(e);
      break;
    case "upperCase":
      upperCase(e);
      break;
    case "camelCase":
      camelCase(e);
      break;
    case "pascalCase":
      pascalCase(e);
      break;
    case "snakeCase":
      snakeCase(e);
      break;
    case "phone":
      telephone(e);
      break;
  }

  // var log = document.getElementById("filteredValue");
  // log.textContent = e.target.value;
}

function customText(e) {
  e.target.value = e.target.value
    .toLowerCase()
    .replace(/([^a-z])([a-z])(?=[a-z])|^([a-z])/g, function (_, g1, g2, g3) {
      return typeof g1 === "undefined"
        ? g3.toUpperCase()
        : g1 + g2.toUpperCase();
    });
}

function upperCase(e) {
  console.log("Upper case");
  e.target.value = e.target.value.toUpperCase();
}

function lowerCase(e) {
  e.target.value = e.target.value.toLowerCase();
}

function camelCase(e) {
  e.target.value = e.target.value.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }
  );

  if (e.target.hasAttribute("nospace")) {
    e.target.value = e.target.value.replace(/\s[A-Z]+/g, function (word) {
      return word.charAt(1).toUpperCase();
    });
  }
}

function pascalCase(e) {
  e.target.value = e.target.value.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    function (word, index) {
      return word.toUpperCase();
    }
  );
  if (e.target.hasAttribute("nospace")) {
    e.target.value = e.target.value.replace(/\s[A-Z]+/g, function (word) {
      return word.charAt(1).toUpperCase();
    });
  }
}

function snakeCase(e) {
  lowerCase(e);
  if (e.target.hasAttribute("nospace")) {
    e.target.value = e.target.value.replace(/\s[A-Za-z]+/g, function (word) {
      return word.replace(" ", "_");
    });
  }
}

function customNumber(e) {
  const value = e.target.value;
  const regex = new RegExp(/^[0-9]*$/);
  e.target.value = value.replace(/\D+/g, "");
}

function telephone(e) {
  e.target.value = e.target.value.replace(/\D/g, "").substring(0,10);
  const phone = e.target.value;
  var match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    e.target.value = "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
}

// DOM observer for added and removed nodes
var observer = new MutationObserver(function (mutations) {
  console.log("Mutation Outer ", mutations);
  mutations.forEach(function (mutation) {
    // Add event listener to added Input nodes
    if(mutation.type === "attributes" && mutation.attributeName === "value"){
      // To handle attribute change here, fire an event of 'input' type
     
      if(mutation.oldValue !== mutation.target.value){
        console.log("Old Value ", mutation.oldValue);
        console.log("New Value ", mutation.target.value);
        initFireEvent(mutation.target)
      }
    
    }
    // initFireEvent(mutation.target)
    if (mutation.addedNodes.length) {
      console.log("Added Nodes ", mutation.addedNodes[0].localName);
      if (mutation.addedNodes[0].localName === "input")
        mutation.addedNodes[0].addEventListener("input", updateValue, {
          passive: true,
        });
    }

    //Remove event listener from removed nodes
    if (mutation.removedNodes.length) {
      console.log("Removed Nodes ", mutation.removedNodes[0]);
      if (mutation.removedNodes[0].localName === "input")
        mutation.removedNodes[0].removeEventListener("input", updateValue);
    }
  });
});

function overrideInputs(input) {
  //property mutation for hidden input
  Object.defineProperty(input, "val", {
    get: function () {
      return this["value"];
    },
    set: function (val) {
      // handle value change here
      this["value"] = val;

      //fire the event
      if ("createEvent" in document) {
        //NON IE browsers
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("input", false, true);
        input.dispatchEvent(evt);
      } else {
        //IE
        var evt = document.createEventObject();
        input.fireEvent("oninput", evt);
      }
    },
  });

}

function initFireEvent(element){
  if ("createEvent" in document) {
    //NON IE browsers
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", false, true);
    element.dispatchEvent(evt);
  } else {
    //IE
    var evt = document.createEventObject();
    element.fireEvent("oninput", evt);
  }
}

document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "complete") {
    startScript();
  }
});

// ---------------------------- Triggers MutationObserver for Input tag ----------------------------
/**
 * Helps the setter function to also set t he value attribute to the input tag, which would trigger the 
 * mutation observer.
 */
(function(elementExample, Object, window){

  function createIDLSetWrapper(key, nativeSet, nativeGet) {
    return function(newValue) {
      var oldValue = this.getAttribute(key);
      nativeSet.call(this, newValue); // natively update the value
      
      if (this.getAttribute(key) === oldValue) {
        // ensure that an attribute is updated so that mutation observers are fired
        this.setAttribute(key, nativeGet.call(this));
          }
    };
  }
  
  var ownProps = Object.getOwnPropertyNames(window);
  for (var i=0, len=ownProps.length|0, key; i<len; i=i+1|0) { 
    key = ownProps[i];
    if (/^HTML[A-Z]\w*Element$/.test(key) && window.hasOwnProperty(key) && !window.propertyIsEnumerable(key) && typeof window[key] === "function") (function(){
      var oldDescriptors = Object.getOwnPropertyDescriptors(window[key].prototype);
      var keys = Object.keys(oldDescriptors);
      var newDescriptors = {};
      
      for (var i=0, len=keys.length|0, prop, description; i<len; i=i+1|0) {
        prop = keys[i];
        description = oldDescriptors[prop];
        if (
          prop !== "nonce" && // supposed to be secret and hidden from CSS
          (!prop.startsWith("on") || elementExample[prop] !== null) && // screen out event listeners
          typeof description.set === "function" && // ensure that this property has a descriptor
          description.set.toString().indexOf("[native code]") !== -1 // ensure that we have not already processed to this element
        ) newDescriptors[prop] = {
          configurable: true,
          enumerable: true,
          get: description.get, // do not modify the original getter
          set: createIDLSetWrapper(prop, description.set, description.get)
        };
      }
      
      // Finally apply the wrappers
      Object.defineProperties(window[key].prototype, newDescriptors);
    })();
  }
  
  })(document.firstElementChild, Object, window);