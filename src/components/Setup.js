import React, {useState} from "react";

function SetUp({ onStart }){
    const [mode, setMode] = useState(null);
    const [playerOne, setPlayerOne] = useState('');

    const handleStart = (isSInglePlayer) =>{
        onStart(playerOne, isSInglePlayer);
    };

    return(
        <div className="setup">
            {mode === null && (
                <div>
                    <button onClick={() => setMode('single')}>1 Player</button>
                    <button onClick={() => setMode('multi')}>2 Player</button>
                </div>
            )}

            {mode && (
                <div>
                    <input type="text" autoFocus placeholder="Player One Name" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)} required/>
                    <button onClick={() => handleStart(mode === 'single')}>Start Game</button>
                    {mode === 'multi' && <button onClick={() => setMode(null)}>Back</button>}
                </div>
            )}
        </div>
    );
}

export default SetUp;