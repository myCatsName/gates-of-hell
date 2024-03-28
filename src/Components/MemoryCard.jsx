import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

const MemoryCard = ({ card, flipped, handleChoice, index }) => {
  const { currentTheme } = useContext(ThemeContext);

  const handleClick = () => {
    handleChoice(card);
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
          y: "500%",
          // rotateX: "360deg",
          rotateX: "1080deg",
          rotateY: "360deg",
          scale: 0.3,
        }}
        animate={{ y: "0%", rotateX: "0deg", rotateY: "0deg", scale: 1 }}
        exit={{}}
        transition={{
          delay: 0.5 + 0.1 * index + Math.random() * 0.5,
          duration: 2.7,
          ease: "circIn",
          type: "spring",
          // damping: 19,
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
};

export default MemoryCard;
