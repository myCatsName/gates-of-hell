import { createContext, useEffect, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [allowJumps, setAllowJumps] = useState(false);
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
        allowJumps,
        setAllowJumps,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
