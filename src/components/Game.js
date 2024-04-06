import React, { useState, useEffect } from 'react';
import Board from './Board';

function Game({ playerOne, playWithComputer, onMainMenu }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);

    const handleComputerMove = () => {
        // Prevent computer moves if the game is won or all squares are filled
        if (winner || squares.every((square) => square !== null)) {
          return;
        }

        const availableSquares = squares
      .map((sq, idx) => (sq === null ? idx : null))
      .filter((val) => val !== null);
    const randomSquare =
      availableSquares[Math.floor(Math.random() * availableSquares.length)];
    if (randomSquare !== undefined) {
      setTimeout(() => {
        squares[randomSquare] = 'O';
        setSquares(squares.slice());
        setXIsNext(true); // Switch back to player
      }, 500); // Delay computer move for better UX
    }
  };


  useEffect(() => {
    // Trigger computer's move when it's their turn
    if (playWithComputer && !xIsNext) {
      handleComputerMove();
    }
  }, [xIsNext, playWithComputer, squares]);