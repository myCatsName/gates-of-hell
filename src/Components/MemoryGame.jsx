import { useEffect, useState, useContext } from "react";
import MemoryCard from "./MemoryCard";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import GameContext from "../Context/GameContext";
import JumpDrawer from "./JumpDrawer";

// TODO: Assets should be separated, feed deck to MemoryGame as prop
import Achala from "../Assets/CardFaces/Arya_Achala.webp";
import dazu_baoding_shan from "../Assets/CardFaces/dazu_baoding.webp";
import Gaki1 from "../Assets/CardFaces/Gaki1.jpg";
import hungryghost from "../Assets/CardFaces/hungryghost.webp";
import ghoul from "../Assets/CardFaces/Oiwa_Quai_Branly_painting_.jpg";
import oxHead from "../Assets/CardFaces/oxhead2.webp";
// import fujin_face from "../Assets/CardFaces/fujin_face.png";
// import riverVictim from "../Assets/CardFaces/riverofBlood.png";
// import tortureVictom from "../Assets/CardFaces/torture.png";

//SFX
import {
  slapSFX,
  lockSFX,
  cleansingBellSFX,
  hauntingDrumsSFX,
  gongs1SFX,
} from "../Sound/SFX";
import { Howler } from "howler";

// % to trigger a "jump" when not making a match
const jumpChance = 21;
// duration in ms TODO: return a slightly random rate maybe
const jumpDuration = 900;

//Use 6 cards, TODO: later will want to pull from a larger pool, and include the "sting" Fudo/Buddha pair
const cardImages = [
  { card: Achala, matched: false },
  { card: dazu_baoding_shan, matched: false },
  { card: Gaki1, matched: false },
  { card: hungryghost, matched: false },
  { card: ghoul, matched: false },
  { card: oxHead, matched: false },
  // { card: fujin_face, matched: false },
];

//TODO : useReducer() instead of states
export function MemoryGame() {
  const [deck, setDeck] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isPerfect, setIsPerfect] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [matchesNeeded, setMatchesNeeded] = useState(cardImages.length - 1);
  const { stats, setStats, allowJumps } = useContext(GameContext);

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

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const handleChoice = (card) => {
    slapSFX.play();
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const jumpDrawer = useDisclosure();
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
        setStats({ ...stats, cycleCount: stats.cycleCount + 1 });
        isPerfect &&
          setStats({ ...stats, perfectCycles: stats.perfectCycles + 1 }) &&
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
        if (Math.random() >= (100 - jumpChance) * 0.01 && allowJumps) {
          jumpDrawer.onOpen();
          gongs1SFX.play();
          setTimeout(() => jumpDrawer.onClose(), jumpDuration);
        }
      }
    }
  }, [
    choiceOne,
    choiceTwo,
    isPerfect,
    matchesNeeded,
    allowJumps,
    stats,
    setStats,
    jumpDrawer,
  ]);

  const deckLeft = [];
  const deckRight = [];
  for (let i = 0; i < deck.length; i++) {
    i < deck.length / 2 ? deckLeft.push(deck[i]) : deckRight.push(deck[i]);
  }

  //TODO: Grid component should be separate
  return (
    <>
      <JumpDrawer isOpen={jumpDrawer.isOpen} onClose={jumpDrawer.onClose} />
      <Grid templateColumns="repeat(12, 1fr)" className="MemoryGameLayout">
        <GridItem className="MemoryGameLeft" gridColumn="1/4">
          {deckLeft.map((card) => (
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
          ))}
        </GridItem>
        <GridItem gridColumn="4/10"></GridItem>
        <GridItem className="MemoryGameRight" gridColumn="10/13">
          {deckRight.map((card) => (
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
          ))}
        </GridItem>
      </Grid>
    </>
  );
}
