export function customNumber(value) {
  return value.replace(/\D+/g, "");
}

export function telephone(e) {
  e.target.value = e.target.value.replace(/\D+/g, "").substring(0,10);
  if(e.target.value.charAt(0) >= '0' && e.target.value.charAt(0) <=5){
    e.target.value = '';
  }
}

export function pincode(e) {

  let defaultLength = e.target.max || 6;
  let value = e.target.value;

  if(e.target.hasAttribute("alphanum")){
    e.target.value = e.target.value.replace(/[\W_]/g, '');
    e.target.value = e.target.value.length > defaultLength  ? value.slice(0,defaultLength) : e.target.value;
  }
  else{
    let pincodeRegex = '^[1-9][0-9]{'+defaultLength+'}$';
    pincodeRegex = new RegExp(pincodeRegex, 'g');
    e.target.value = e.target.value.replaceAll(pincodeRegex, value.slice(0,defaultLength));
    e.target.value = e.target.value.replace(/\D|^[0].*$/g,'');
  }
}
