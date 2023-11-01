import { useEffect, useState, useContext } from "react";
import MemoryCard from "./MemoryCard";
import { Grid, GridItem } from "@chakra-ui/react";
import GameContext from "../Context/GameContext";

//Assets should be separated, feed deck to MemoryGame as prop
import Fudo_icon from "../Assets/Fudo_icon.png";
import Achala from "../Assets/CardFaces/Arya_Achala.jpg";
import dazu_baoding_shan from "../Assets/CardFaces/dazu_baoding.png";
import fujin_face from "../Assets/CardFaces/fujin_face.png";
import Gaki1 from "../Assets/CardFaces/Gaki1.jpg";
import hungryghost from "../Assets/CardFaces/hungryghost.png";
import ghoul from "../Assets/CardFaces/Oiwa_Quai_Branly_painting_.jpg";
import oxHead from "../Assets/CardFaces/oxhead2.png";
// import riverVictim from "../Assets/CardFaces/riverofBlood.png";
// import tortureVictom from "../Assets/CardFaces/torture.png";

//SFX
import {
  slapSFX,
  lockSFX,
  cleansingBellSFX,
  hauntingDrumsSFX,
} from "../Sound/SFX";
import { Howler } from "howler";

//Use 6 cards, later will want to pull from a larger pool, and include the "sting" Fudo/Buddha pair
const cardImages = [
  { card: Achala, matched: false },
  { card: dazu_baoding_shan, matched: false },
  { card: Gaki1, matched: false },
  { card: hungryghost, matched: false },
  { card: ghoul, matched: false },
  { card: oxHead, matched: false },
  // { card: fujin_face, matched: false },
];

export function MemoryGame() {
  const [deck, setDeck] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isPerfect, setIsPerfect] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [matchesNeeded, setMatchesNeeded] = useState(cardImages.length - 1);
  const { setCycleCount, setPerfectCycles } = useContext(GameContext);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setGameFinished(false);
    setDeck(shuffledCards);
    setIsPerfect(true);
    setMatchesNeeded(cardImages.length - 1);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  const deckLeft = [];
  const deckRight = [];
  for (let i = 0; i < deck.length; i++) {
    i < deck.length / 2 ? deckLeft.push(deck[i]) : deckRight.push(deck[i]);
  }

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const handleChoice = (card) => {
    slapSFX.play();
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // TODO: SFX and win methods should be defined separately
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      //match
      if (choiceOne.card === choiceTwo.card && matchesNeeded > 0) {
        setDeck((prevDeck) => {
          return prevDeck.map((card) => {
            if (card.card === choiceOne.card) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
        lockSFX.play();
        setMatchesNeeded(matchesNeeded - 1);
        console.log("match");
      }
      //win
      else if (choiceOne.card === choiceTwo.card && matchesNeeded === 0) {
        setDeck((prevDeck) => {
          return prevDeck.map((card) => {
            if (card.card === choiceOne.card) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
        Howler.volume(0.5);
        lockSFX.play();
        hauntingDrumsSFX.play();
        console.log("Game Won");
        setCycleCount((prev) => prev + 1);
        isPerfect &&
          setPerfectCycles((prev) => prev + 1) &&
          console.log("Perfect!");
        setGameFinished(true);
        setTimeout(() => {
          shuffleCards();
        }, 4500);
      }
      //no match
      else {
        isPerfect && setIsPerfect(false);
        setTimeout(() => resetTurn(), 600);
        cleansingBellSFX.play();
        console.log("no match");
      }
    }
  }, [
    choiceOne,
    choiceTwo,
    isPerfect,
    matchesNeeded,
    setCycleCount,
    setPerfectCycles,
  ]);

  return (
    <Grid templateColumns="repeat(12, 1fr)" className="MemoryGameLayout">
      <GridItem className="MemoryGameLeft" gridColumn="1/4">
        {deckLeft.map((card) => (
          <div className="GameCard" key={card.id}>
            <MemoryCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={
                card === choiceOne ||
                card === choiceTwo ||
                card.matched === true
              }
            />
          </div>
        ))}
      </GridItem>
      <GridItem gridColumn="4/10"></GridItem>
      <GridItem className="MemoryGameRight" gridColumn="10/13">
        {deckRight.map((card) => (
          <div className="GameCard" key={card.id}>
            <MemoryCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={
                card === choiceOne ||
                card === choiceTwo ||
                card.matched === true
              }
            />
          </div>
        ))}
      </GridItem>
    </Grid>
  );
}
