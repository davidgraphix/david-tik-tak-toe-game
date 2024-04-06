import React, { useState } from "react";
import '../App.css'


function App() {
  const [playerOne, setPlayerOne] = useState('');
  const [playWithComputer, setPlayWithComputer] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (playerOneName, isSinglePlayer) => {
    setPlayerOne(playerOneName);
    setPlayWithComputer(isSinglePlayer);
    setGameStarted(true);
  };

  const returnToMainMenu = ()=>{
    setGameStarted(false);
  }

  return(
    <div className="app">
      {gameStarted ? (
        <Setup onStart={(playerOneName, isSinglePlayer) => startGame(playerOneName, isSinglePlayer)}/>
      ) : (
        <Game 
        playerOne={playerOne}
        playWithComputer={playWithComputer}
        onMainMenu={returnToMainMenu} 
        />
      )
      }
    </div>
  )
}