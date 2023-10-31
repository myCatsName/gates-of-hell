import { createContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({children}){
    const [omCount, setOmCount] = useState(0)
    const [cycleCount, setCycleCount] = useState(0)
    const [perfectCycles, setPerfectCycles] = useState(0)


    return(
        <GameContext.Provider value={{omCount, setOmCount,cycleCount, setCycleCount,perfectCycles, setPerfectCycles}}>{children}</GameContext.Provider>
    )
}

export default GameContext