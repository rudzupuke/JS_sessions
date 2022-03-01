const cookie = document.querySelector(".cookie");
const clickCount = document.querySelector(".click-count");
const result = document.querySelector(".result");

let clicks = 0;
function countClicks() {
  clicks++;
  clickCount.textContent = clicks.toString();

  if (clicks === 1) {
    setTimeout(function () {
      cookie.removeEventListener("click", countClicks);
      result.textContent = `One minute has passed and you clicked ${clicks} times!`;
    }, 6000);
  }
}

cookie.addEventListener("click", countClicks);

const newGameBtn = document.querySelector(".reset");

function newGame() {
  clickCount.textContent = "";
  result.textContent = "";
  clicks = 0;

  cookie.addEventListener("click", countClicks);
}

newGameBtn.addEventListener("click", newGame);
