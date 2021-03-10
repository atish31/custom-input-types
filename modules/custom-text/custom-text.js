export function customText(e) {
  e.target.value = e.target.value
    .toLowerCase()
    .replace(/([^a-z])([a-z])(?=[a-z])|^([a-z])/g, function (_, g1, g2, g3) {
      return typeof g1 === 'undefined'
        ? g3.toUpperCase()
        : g1 + g2.toUpperCase();
    });
}
