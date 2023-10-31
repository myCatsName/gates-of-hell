import FooterButton from "./FooterButton";
import { MemoryGame, shuffleCards } from "./MemoryGame";

export function MemoryGameFooterButton() {
  return (
    <div className="MemoryGameButton">
      <FooterButton onClick={() => {}}>Start Match Game</FooterButton>
    </div>
  );
}
