import { createContext, useEffect, useState } from "react";

const GameContext = createContext();

//TODO: let jumpDuration = 1500;

export function GameProvider({ children }) {
  const [allowJumps, setAllowJumps] = useState(true);
  const [jumpChance, setJumpChance] = useState(21); // default (21); % to trigger a "jump" when not making a match //
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
        jumpChance,
        setJumpChance,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
