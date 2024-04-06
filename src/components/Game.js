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