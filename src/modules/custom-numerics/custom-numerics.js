export function customNumber(value) {
  return value.replace(/\D+/g, "");
}

export function telephone(e) {
  e.target.value = e.target.value.replace(/\D/g, "").substring(0, 10);
  const phone = e.target.value;
  let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    e.target.value = "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
}

export function pincode(e) {

  let defaultLength = e.target.max || 6
  let pincodeRegex = '^[1-9][0-9]{'+defaultLength+'}$';
  pincodeRegex = new RegExp(pincodeRegex, 'g');
  let value = e.target.value;

  e.target.value = e.target.value.replaceAll(pincodeRegex, value.slice(0,defaultLength));
  e.target.value = e.target.value.replace(/\D|^[0].*$/g,'');
}
