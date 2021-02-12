function startScript() {
  var inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.addEventListener("input", updateValue, { passive: true });
    overrideInputs(input);
  }

  observer.observe(document.body, {
    childList: true,
    attributeFilter: ["input"],
    attributes: true,
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
  }

  var log = document.getElementById("filteredValue");
  log.textContent = e.target.value;
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
  e.target.value = e.target.value.replaceAll(/\D+/g, "");
}

// DOM observer for added and removed nodes
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Add event listener to added Input nodes
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
      console.log("Getter ", this);
      return this["value"];
    },
    set: function (val) {
      // handle value change here
      console.log("Setter", this);
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

document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "complete") {
    startScript();
  }
});
