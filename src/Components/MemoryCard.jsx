import CardBack from "../Assets/CardFaces/PlayingCardReverse.png";

export default function MemoryCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className={`GameCard ${flipped ? "flipped" : ""}`}>
      <img className="CardFront" src={card.card} alt="Memory Card Face" />

      <img
        className="CardReverse"
        src={CardBack}
        alt="Memory Card Reverse"
        onClick={handleClick}
      />
    </div>
  );
}
