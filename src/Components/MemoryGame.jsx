import {
  useEffect,
  useState,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import MemoryCard from "./MemoryCard";
import GameContext from "../Context/GameContext";
import JumpDrawer from "./JumpDrawer";

// Card Assets
import Achala from "../Assets/CardFaces/Arya_Achala.webp";
import dazu_baoding_shan from "../Assets/CardFaces/dazu_baoding.webp";
import Gaki1 from "../Assets/CardFaces/Gaki1.jpg";
import hungryghost from "../Assets/CardFaces/hungryghost.webp";
import ghoul from "../Assets/CardFaces/Oiwa_Quai_Branly_painting_.jpg";
import oxHead from "../Assets/CardFaces/oxhead2.webp";

//SFX
import {
  playSlapSFX,
  playLockSFX,
  playCleansingBellSFX,
  playHauntingDrumsSFX,
  playGongs1SFX,
} from "../Sound/SFX";
import { VFX } from "../HelperFx/VFX";

const cardImages = [
  { card: Achala, matched: false },
  { card: dazu_baoding_shan, matched: false },
  { card: Gaki1, matched: false },
  { card: hungryghost, matched: false },
  { card: ghoul, matched: false },
  { card: oxHead, matched: false },
];

export default function MemoryGame() {
  const [deck, setDeck] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const matchesNeeded = useRef(cardImages.length - 1);
  const isDisabled = useRef(false);
  const { stats, setStats, jumpChance, setGameFinished, isPerfect } =
    useContext(GameContext);

  const shuffleCards = useCallback(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setGameFinished(false);
    setChoiceOne(null);
    setChoiceTwo(null);
    setDeck(shuffledCards);
    isPerfect.current = true;
    matchesNeeded.current = cardImages.length - 1;
  }, [setGameFinished, isPerfect]);

  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    isDisabled.current = false;
  };

  const handleChoice = (card) => {
    if (!isDisabled.current) {
      playSlapSFX();
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  const jumpDrawer = useDisclosure();
  const jumpControl = useMemo(() => {
    return { onOpen: jumpDrawer.onOpen, onClose: jumpDrawer.onClose };
  }, [jumpDrawer.onOpen, jumpDrawer.onClose]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      isDisabled.current = true;
      //match
      if (choiceOne.card === choiceTwo.card && matchesNeeded.current > 0) {
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
        matchesNeeded.current = matchesNeeded.current - 1;
        console.log("match");
      }
      //win
      else if (
        choiceOne.card === choiceTwo.card &&
        matchesNeeded.current === 0
      ) {
        setGameFinished(true);
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
        playHauntingDrumsSFX();
        console.log("Game Won");
        setStats((stats) => ({ ...stats, cycleCount: stats.cycleCount + 1 }));
        isPerfect.current &&
          setStats((stats) => ({
            ...stats,
            perfectCycles: stats.perfectCycles + 1,
          })) &&
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
        if (isPerfect.current) {
          isPerfect.current = false;
        }
        playCleansingBellSFX();
        console.log("no match");
        if (Math.random() >= (100 - jumpChance.current) * 0.01) {
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
    isPerfect,
    jumpChance,
    jumpControl,
    shuffleCards,
    setGameFinished,
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
            flipped={
              card === choiceOne || card === choiceTwo || card.matched === true
            }
          />
        ))}
      </GridItem>
    </Grid>
  );
}
