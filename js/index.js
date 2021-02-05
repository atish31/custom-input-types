var inputs = document.querySelectorAll("input");
const log = document.getElementById("filteredValue");
for (const input of inputs) {
  input.addEventListener("input", updateValue, { passive: true });
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
  }

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

function customNumber(e) {
  const value = e.target.value;
  const regex = new RegExp(/^[0-9]*$/);
  console.log(regex.test(value));
  e.target.value = e.target.value.replaceAll(/\D+/g, "");
}
