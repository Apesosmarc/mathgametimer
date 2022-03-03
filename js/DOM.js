const numsToDom = (arr) => {
  const problemText = `${arr[0]} + ${arr[1]}`;

  problem.innerHTML = problemText;
};

const clearInput = () => {
  solutionInput.value = "";
};

const scoreToDOM = (score) => {
  scoreDOM.innerHTML = score;
};

const highScoreToDOM = (highscore) => {
  highscoreDOM.innerHTML = highscore;
};

// TIMER

const timerToDOM = (time) => {
  timerDOM.innerHTML = time;
};

const DOMUnfocus = () => {
  solutionInput.blur();
};
