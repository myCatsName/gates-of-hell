import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function MemoryCard({ card, handleChoice, flipped, disabled }) {
  const { currentTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className={`GameCard ${flipped ? "flipped" : ""}`}>
      <img className="CardFront" src={card.card} alt="Memory Card Face" />

      <img
        className="CardReverse"
        src={require(`../Assets/CardFaces/${currentTheme.cardBack}`)}
        alt="Memory Card Reverse"
        onClick={handleClick}
      />
    </div>
  );
}
