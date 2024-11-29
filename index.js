const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// Time constants
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  // Get current date
  const now = new Date();
  const yyyy = now.getFullYear();

  // Get target date from user
  const enteredDay = prompt("Enter Day (DD)").padStart(2, "0");
  const enteredMonth = prompt("Enter Month (MM)").padStart(2, "0");

  let targetDate = new Date(`${yyyy}-${enteredMonth}-${enteredDay}`);

  // Adjust to next year if the date has already passed
  if (now > targetDate) {
    targetDate = new Date(`${yyyy + 1}-${enteredMonth}-${enteredDay}`);
  }

  const updateTimer = () => {
    const today = new Date().getTime();
    const difference = targetDate.getTime() - today;

    if (difference < 0) {
      // Stop the timer when the countdown reaches zero
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up!";
      clearInterval(intervalId);
      return;
    }

    // Calculate remaining time
    const leftDays = Math.floor(difference / day);
    const leftHours = Math.floor((difference % day) / hour);
    const leftMinutes = Math.floor((difference % hour) / minute);
    const leftSeconds = Math.floor((difference % minute) / second);

    // Update the DOM
    daysElement.innerText = leftDays;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    secondsElement.innerText = leftSeconds;
  };

  // Update the timer every second
  const intervalId = setInterval(updateTimer, 1000);
  updateTimer(); // Initialize immediately
};

timerFunction();
