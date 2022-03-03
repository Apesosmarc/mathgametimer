class Game {
  constructor(max) {
    this.max = max;
    this.score = 0;
    this.timer = 10;
    this.highScore = 0;
  }

  reset() {
    this.createAddends();
    this.handleScore();
  }

  handleScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      highScoreToDOM(this.highScore);
    }
  }

  makeRandom() {
    return Math.floor(Math.random() * (this.max - 1 + 1) + 1);
  }

  createAddends = () => {
    this.nums = [this.makeRandom(), this.makeRandom()];
    this.solution = this.nums[0] + this.nums[1];
    numsToDom(this.nums);
  };

  validate(solution) {
    solution = Number(solution);

    if (isNaN(solution)) {
      return;
    } else if (solution === this.solution) {
      this.addTimer();

      clearInput();
      this.setScore();
      this.reset();
    } else {
      return;
    }
  }

  setScore() {
    this.score++;
    this.tickScore();
  }

  addTimer() {
    this.timer++;
    this.tickTimer();
  }

  setTimer() {
    let timer;
    timer = setInterval(() => {
      if (this.timer === 0) {
        console.log(timer);
        clearInterval(timer);
        timer = false;
        this.tickTimer();
      } else {
        this.timer--;
        this.tickTimer();
      }
    }, 1000);

    return timer;
  }

  tickTimer() {
    if (this.timer === 0) {
      this.cleanup();
    }

    timerToDOM(this.timer);
  }

  tickScore() {
    scoreToDOM(this.score);
  }

  cleanup() {
    this.handleScore();
    setTimeout(() => {
      this.score = 0;
      this.tickScore();
      this.timer = 10;
      timerToDOM(this.timer);
    }, 1000);
    setTimerFalse();
  }
}

const game = new Game(10);
game.createAddends();
