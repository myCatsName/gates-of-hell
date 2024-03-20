import { useEffect, useState, useContext, useRef, useMemo } from "react";
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
  playSlapSFX,
  playLockSFX,
  playCleansingBellSFX,
  playHauntingDrumsSFX,
  playGongs1SFX,
} from "../Sound/SFX";
import { Howler } from "howler";
import { VFX } from "../HelperFx/VFX";

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
export default function MemoryGame() {
  const [deck, setDeck] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matchesNeeded, setMatchesNeeded] = useState(cardImages.length - 1);
  const isPerfect = useRef(true);
  const { stats, setStats, allowJumps, jumpChance } = useContext(GameContext);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setDeck(shuffledCards);
    isPerfect.current = true;
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
    playSlapSFX();
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const jumpDrawer = useDisclosure();
  const jumpControl = useMemo(() => {
    return { onOpen: jumpDrawer.onOpen, onClose: jumpDrawer.onClose };
  }, [jumpDrawer.onOpen, jumpDrawer.onClose]);

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
        playLockSFX();
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
        playLockSFX();
        playHauntingDrumsSFX();
        console.log("Game Won");
        setStats({ ...stats, cycleCount: stats.cycleCount + 1 });
        isPerfect.current === true &&
          setStats({ ...stats, perfectCycles: stats.perfectCycles + 1 }) &&
          console.log("Perfect!");
        setTimeout(() => {
          shuffleCards();
        }, 5000);
        setTimeout(() => {
          VFX.CARDEXIT.SPINSHRINKTOCENTER();
        }, 1000);
      }
      //no match
      else {
        if (isPerfect.current === true) {
          isPerfect.current = false;
        }
        playCleansingBellSFX();
        console.log("no match");
        if (Math.random() >= (100 - jumpChance) * 0.01 && allowJumps) {
          setTimeout(resetTurn, 1600);
          playGongs1SFX();
          VFX.JUMP.DARKHUESHAKE(jumpControl);
        } else {
          setTimeout(resetTurn, 600);
        }
      }
    }
  }, [
    choiceOne,
    choiceTwo,
    matchesNeeded,
    stats,
    setStats,
    allowJumps,
    jumpChance,
    jumpControl,
  ]);

  const deckLeft = [];
  const deckRight = [];
  for (let i = 0; i < deck.length; i++) {
    i < deck.length / 2 ? deckLeft.push(deck[i]) : deckRight.push(deck[i]);
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)" className="MemoryGameLayout">
      <JumpDrawer isOpen={jumpDrawer.isOpen} onClose={jumpDrawer.onClose} />
      <GridItem className="MemoryGameLeft" gridColumn="1/4">
        {deckLeft.map((card, index) => (
          <MemoryCard
            key={card.id}
            index={index}
            card={card}
            handleChoice={handleChoice}
            disabled={disabled}
            flipped={
              card === choiceOne || card === choiceTwo || card.matched === true
            }
          />
        ))}
      </GridItem>
      <GridItem gridColumn="4/10"></GridItem>
      <GridItem className="MemoryGameRight" gridColumn="10/13">
        {deckRight.map((card, index) => (
          <MemoryCard
            key={card.id}
            index={index}
            card={card}
            handleChoice={handleChoice}
            disabled={disabled}
            flipped={
              card === choiceOne || card === choiceTwo || card.matched === true
            }
          />
        ))}
      </GridItem>
    </Grid>
  );
}
