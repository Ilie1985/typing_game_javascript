const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end-game");
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

//create function to get random word

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

console.log(getRandomWord());

//add word to DOM

const addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};
addWordToDom();
