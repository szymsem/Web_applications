function Clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}

setInterval(Clock, 1000);
displayTime();
