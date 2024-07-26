let totalTimeInSec = 0;
let remainingTime = 450000;
let timerId;
let isPause = false;

function updateDisplay() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}

function startTimer() {
  const minuteInput = parseInt(
    document.getElementById("inputminute").value,
    10
  );
  const secondInput = parseInt(
    document.getElementById("inputsecond").value,
    10
  );

  totalTimeInSec = minuteInput * 60 + secondInput;
  remainingTime = totalTimeInSec;

  if(remainingTime <= 0) return;
  document.getElementById("demo").innerHTML = "";
  isPause = true;

  updateDisplay();

  timerId = setInterval(() => {
    if (isPause) {
      remainingTime--;
      updateDisplay();
      if (remainingTime <= 0) {
        clearInterval(timerId);
        document.getElementById("demo").innerHTML = "TIME UP";
      }
    }
  }, 1000);
}

function pauseResumeTimer() {
  isPause = !isPause;
}

function resetTimer() {
  clearInterval(timerId);
  isPause = false;
  totalTimeInSec = 0;
  remainingTime = 0;
  document.getElementById("inputminute").value = "00";
  document.getElementById("inputsecond").value = "00";
  updateDisplay();
}
