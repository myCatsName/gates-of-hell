import { useContext, startTransition } from "react";
import GameContext from "../Context/GameContext";

//ui
import {
  Button,
  Fade,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

//assets
import very_dark_swatch from "../Assets/Swatches/very_dark_swatch.png";
import sanjo_palace from "../Assets/sanjo_palace_burning.webp";

//SFX
import { playDoubleTamborineSFX as gameStartSFX } from "../Sound/SFX";

export default function WarningModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { jumpChance, defaultJumpChance, setLoadGame } =
    useContext(GameContext);

  const handleClick = (preference) => {
    jumpChance.current = preference ? defaultJumpChance : 0;
    gameStartSFX();
    startTransition(() => {
      setLoadGame(true);
    });
    if (!document.startViewTransition) {
      return onClose();
    }
    document.startViewTransition(() => {
      onClose();
    });
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay
        className="entryBackground"
        backgroundImage={sanjo_palace}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Fade in={isOpen} transition={{ enter: { duration: 1 } }}>
          <ModalContent
            className="entryModal"
            textAlign={"center"}
            backgroundImage={very_dark_swatch}
            color={"green.400"}
            border={"3px solid black"}
            textShadow={"2px 2px 5px black"}
            filter={`drop-shadow(0px 30px 2rem rgba(14, 13, 13, 0.7)) drop-shadow(0px 0px 5rem rgba(14, 13, 13, 0.8))`}
          >
            <ModalHeader textDecor={"underline"}>
              <h1>WARNING</h1>
            </ModalHeader>
            <ModalBody>
              Fudō Myōō lives in Buddhist Hells.
              <br />
              This game has jump scares and
              <br />
              pictures of Buddhist ghosts and demons.
              <br />
              You can choose to play without jump scares.
            </ModalBody>
            <ModalFooter justifyContent={"center"} gap={"10px"}>
              <Button
                className="modal-button"
                onClick={() => handleClick(true)}
              >
                I'm Ready for Hell!
              </Button>
              <Button
                className="modal-button"
                onClick={() => handleClick(false)}
              >
                Play Without Jump Scares
              </Button>
            </ModalFooter>
          </ModalContent>
        </Fade>
      </ModalOverlay>
    </Modal>
  );
}
