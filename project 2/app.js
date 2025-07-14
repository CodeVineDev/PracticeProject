window.addEventListener("load", () => {
  const sec = document.querySelector("#seconds");
  const min = document.querySelector("#minutes");
  const hrs = document.querySelector("#hours");
  const period = document.querySelector("#period");

  setInterval(() => {
    let realDate = new Date()
    let hours = realDate.getHours();
    let minutes = realDate.getMinutes();
    let seconds = realDate.getSeconds();
    if (hours >= 12) {
      period.textContent = "PM";
    } else {
      period.textContent = "AM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    sec.textContent = seconds.toString().padStart(2, "0");
    min.textContent = minutes.toString().padStart(2, "0");
    hrs.textContent = hours.toString().padStart(2, "0");
  }, 1000);
});
