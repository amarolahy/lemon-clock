import '../sass/index.scss';

const hoursHand = document.querySelector<HTMLDivElement>('#hours');
const minutesHand = document.querySelector<HTMLDivElement>('#minutes');
const secondsHand = document.querySelector<HTMLDivElement>('#seconds');

const setTime = () => {
  const now = new Date();

  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();

  hoursHand.style.transform = `rotate(${(h / 12) * 360}deg)`;
  minutesHand.style.transform = `rotate(${(m / 60) * 360}deg)`;
  secondsHand.style.transform = `rotate(${(s / 60) * 360}deg)`;
}

window.onload = () => {
  setTime();
}

setInterval(setTime, 1000);