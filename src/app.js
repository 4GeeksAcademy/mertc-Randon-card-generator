/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["\u2663", "\u2666", "\u2665", "\u2660"];

  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);

  const topLeft = document.getElementById("top-left");
  const bottomRight = document.getElementById("bottom-right");
  const cardValue = document.getElementById("card-value");
  const card = document.getElementById("card");

  topLeft.textContent = randomSuit;
  bottomRight.textContent = randomSuit;
  cardValue.textContent = randomValue;

  // Apply the class based on the suit to color the text appropriately
  card.className = `card border border-dark bg-white h-100 ${randomSuit}`;

  //write your code here
  console.log("Hello Rigo from the console!");
};
