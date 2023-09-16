// Script I run on takenos web page to calculate the total amount of deposits I've made

const allDivs = document.querySelectorAll("div");
const matchedDivs = [];

allDivs.forEach((div) => {
  if (div.textContent.includes("Depósito")) {
    matchedDivs.push(div);
  }
});

let total = 0;

matchedDivs.forEach((div) => {
  // Get the sibling element
  const sibling = div.nextElementSibling;

  // Extract the money value from the sibling
  if (sibling) {
    const moneyValueElement = sibling.querySelector("p.chakra-text");
    if (moneyValueElement) {
      // Extract the numeric value from the text (e.g., from "$546,47 USD" to "546.47")
      const valueString = moneyValueElement.textContent
        .replace(/[$ USD\s]/g, "")
        .replace(",", ".");
      const value = parseFloat(valueString);

      // Check if the parsed value is a valid number and not NaN
      if (!isNaN(value)) {
        console.log(value);
        total += value;
      }
    }
  }
});

console.log(`Total deposits: $${total.toFixed(2)} USD`);
