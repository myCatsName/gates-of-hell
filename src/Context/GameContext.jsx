import { createContext, useEffect, useRef, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [loadGame, setLoadGame] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const isPerfect = useRef(true);
  const defaultJumpChance = 21;
  const jumpChance = useRef(defaultJumpChance); // % to trigger a "jump" when not making a match
  const [stats, setStats] = useState(
    JSON.parse(localStorage.getItem("stats")) || {
      omCount: 0,
      cycleCount: 0,
      perfectCycles: 0,
      stings: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  return (
    <GameContext.Provider
      value={{
        stats,
        setStats,
        jumpChance,
        defaultJumpChance,
        loadGame,
        setLoadGame,
        gameFinished,
        setGameFinished,
        isPerfect,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
