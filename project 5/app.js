const inputTip = document.getElementById("input-tip");
const calculate = document.getElementById("calculate");
const total = document.getElementById("total");

calculate.addEventListener("click", () => {
  let input = Number(inputTip.value);
  let tipTotal = input * 0.2;
  totalValue = tipTotal + input;
  total.textContent = "$" + totalValue.toFixed(2)
  inputTip.value = "";
});



