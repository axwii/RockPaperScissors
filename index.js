"use strict";
let result;
let userGuess;
let computerGuess;
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resultMessages = document.querySelectorAll("#texts > div");

document.querySelectorAll("#buttons > *").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    userGuess = e.target.className;
    playRound();
    computerPlay();
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  computerGuess = choices[Math.floor(Math.random() * choices.length)];

  console.log("Computer's turn! Computer chose: " + computerGuess);
}

function determinWinner() {
  console.log("Determining winner..." + userGuess + " vs " + computerGuess);
  resultMessages.forEach((msg) => msg.classList.add("hidden")); // Hide all result messages

  if (userGuess === computerGuess) {
    console.log("It's a draw!");
    document.querySelector("#draw").classList.remove("hidden");
  } else if (
    (userGuess === "rock" && computerGuess === "scissors") ||
    (userGuess === "paper" && computerGuess === "rock") ||
    (userGuess === "scissors" && computerGuess === "paper")
  ) {
    console.log("You win!");
    document.querySelector("#win").classList.remove("hidden");
  } else {
    console.log("You lose!");
    document.querySelector("#lose").classList.remove("hidden");
  }
}

function playRound() {
  resultMessages.forEach((msg) => msg.classList.add("hidden"));

  // Remove previous classes
  ["rock", "paper", "scissors"].forEach((cls) => {
    player1.classList.remove(cls);
    player2.classList.remove(cls);
  });

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener(
    "animationend",
    () => {
      player1.classList.remove("shake");
      player2.classList.remove("shake");

      addClassBasedOnGuess(player1, userGuess);
      addClassBasedOnGuess(player2, computerGuess);

      determinWinner(); // Call determinWinner after the animation ends
    },
    { once: true }
  );

  console.log("playRound");
}

function addClassBasedOnGuess(player, guess) {
    player.classList.add(guess);
  }