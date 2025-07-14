window.addEventListener("load", () => {
  const counterValue = document.querySelector("#counter-value");
  const increase = document.querySelector("#increase");
  const decrease = document.querySelector("#decrease");
  const clear = document.querySelector("#clear");
  let count = 0;
  counterValue.textContent = "start";

  increase.addEventListener("click", () => {
    count += 1;
    counterValue.textContent = count;
  });
  decrease.addEventListener("click", () => {
    count -= 1;
    counterValue.textContent = count;
  });
  clear.addEventListener("click", () => {
    count = 0;
    counterValue.textContent = count;
  });
});
