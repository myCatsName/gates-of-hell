import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@chakra-ui/react";

export default function MemoryCard({
  card,
  handleChoice,
  flipped,
  disabled,
  index,
}) {
  const { currentTheme } = useContext(ThemeContext);
  const motionReduced = usePrefersReducedMotion();

  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  const footerArea = document.getElementById("footerArea");
  const onDeckAnimateStart = () => {
    footerArea.style.zIndex = 5;
  };
  const onDeckAnimateEnd = () => {
    footerArea.style.zIndex = "initial";
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="memoryCard"
        className={`GameCard ${flipped ? "flipped" : ""}`}
        onAnimationStart={onDeckAnimateStart}
        onAnimationComplete={onDeckAnimateEnd}
        initial={{
          opacity: motionReduced ? 0 : 1,
          y: motionReduced ? "0%" : "500%",
          rotateX: motionReduced ? "0deg" : "1080deg",
          rotateY: motionReduced ? "0deg" : "360deg",
          scale: 0.3,
        }}
        animate={{
          opacity: 1,
          y: "0%",
          rotateX: "0deg",
          rotateY: "0deg",
          scale: 1,
        }}
        exit={{}}
        transition={{
          delay: 0.5 + 0.1 * index + Math.random() * 0.5,
          duration: 2.7,
          ease: "circIn",
          type: "spring",
        }}
      >
        <img
          className="CardFront"
          src={card.card}
          alt="Memory Card Face"
          draggable={false}
          loading="lazy"
        />

        <img
          className="CardReverse"
          src={require(`../Assets/CardFaces/${currentTheme.cardBack}`)}
          alt="Memory Card Reverse"
          onClick={handleClick}
          draggable={false}
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  );
}
