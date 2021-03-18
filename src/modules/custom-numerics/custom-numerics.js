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

  let value = e.target.value;
  e.target.value = e.target.value.replaceAll(/^[1-9][0-9]{6}$/g, value.slice(0,6));
  e.target.value = e.target.value.replace(/\D|^[0].*$/g,'');
}
