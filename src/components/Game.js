import React, { useState, useEffect } from 'react';
import Board from './Board';
import calculateWinner from './CalculateWinner';

function Game({ playerOne, playWithComputer, onMainMenu }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const isDraw = winner === null && squares.every((square) => square !== null);

  useEffect(() => {
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
          setXIsNext(true);
        }, 500);
      }
    };

  
    if (playWithComputer && !xIsNext) {
      handleComputerMove();
    }
  }, [xIsNext, playWithComputer, squares, winner]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setSquares(squares.slice());
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? playerOne : "Computer"}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw";
  } else {
    status = `Next player: ${xIsNext ? playerOne : "Computer"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        {(winner || isDraw) && (
          <>
            <button onClick={restartGame} className="game-button">Play Again</button>
            <button onClick={onMainMenu} className="game-button">Main Menu</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
