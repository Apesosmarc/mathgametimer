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

  debounceTimer() {
    let timeoutid;
    return () => {
      if (timeoutid) {
        return;
      }
      if (!timeoutid) {
        timeoutid = this.setTimer();
      }
    };
  }

  setTimer() {
    const timer = setInterval((timer) => {
      console.log("wat");
      if (this.timer === 0) {
        clearInterval(timer);
      } else {
        this.timer--;
        this.tickTimer();
      }
    }, 1000);

    return timer;
  }

  tickTimer() {
    if (this.timer === 0) {
      this.timer = 10;
      this.handleScore();
      this.score = 0;
      this.tickScore();
    }

    timerToDOM(this.timer);
  }

  tickScore() {
    scoreToDOM(this.score);
  }
}

const game = new Game(10);
game.createAddends();
