let valueDisplays = document.querySelectorAll("#nums");
let interval = 2000;

console.log(valueDisplays)

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = `+${startValue}`;

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);

});
