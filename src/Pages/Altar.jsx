import Typewriter from "../Components/Typewriter";
import { useContext } from "react";
import GameContext from "../Context/GameContext";

export function Headline() {
  const { gameFinished, isPerfect } = useContext(GameContext);
  return (
    <div
      className="Headline"
      style={{
        textAlign: "center",
        fontSize: "12vh",
        fontFamily: "Allison, cursive",
      }}
    >
      <Typewriter
        className="typewriter"
        text={
          gameFinished
            ? isPerfect.current
              ? "Perfect!"
              : "You Won!"
            : "Fudō is Coming"
        }
        delay={75}
        pause={250}
      />
    </div>
  );
}
