export function convertSnakeCaseToCamelCase(inputString) {
  return inputString.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
      .replace('-', '')
      .replace('_', ''));
}
