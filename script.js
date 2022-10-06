const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

//List of words for game

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];
//Init word

let randomWord;

//init score

let score = 0;

//init time

let time = 10;

//focus on text on start
text.focus();

//start counting down

const timeInterval = setInterval(updateTime, 1000);

//create function to get random word

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

console.log(getRandomWord());

//update time function

const updateTime = () => {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    //end game

    gameOver();
  }
};

//game over function

const gameOver = () => {
  endGameEl.innerHTML = `<h1>Time ran out</h1>
   <p>Your final score is ${score}
   <button.onclick= "location.reload()">Reload </button>
   `;

  endGameEl.style.display = "flex";
};

//add word to DOM

const addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};
addWordToDom();

//update score function

const updateScore = () => {
  score++;
  scoreEl.innerHTML = score;
};

// event listener

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();
    // clear the input field
    e.target.value = "";
  }
});
