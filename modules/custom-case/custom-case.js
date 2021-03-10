export function upperCase(value) {
  return value.toUpperCase();
}

export function lowerCase(value) {
  return value.toLowerCase();
}

export function camelCase(e) {
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

export function pascalCase(e) {
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

export function snakeCase(e) {
  e.target.value = e.target.value.toLowerCase();
  if (e.target.hasAttribute("nospace")) {
    e.target.value = e.target.value.replace(/\s[A-Za-z]+/g, function (word) {
      return word.replace(" ", "_");
    });
  }
}
