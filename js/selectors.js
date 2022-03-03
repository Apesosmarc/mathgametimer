const solutionInput = document.querySelector("#solution");
const solutionForm = document.querySelector("#solutionForm");

const problem = document.querySelector("#problem");

const timerDOM = document.querySelector("#timer");

const scoreDOM = document.querySelector("#score");
const highscoreDOM = document.querySelector("#highscore");

let timer = false;

solutionInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (!timer) {
    timer = true;
    game.setTimer();
  }
  const input = solutionInput.value;

  game.validate(input);
});

solutionForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

setTimerFalse = () => {
  timer = false;
};
