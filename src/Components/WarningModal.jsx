import { useContext } from "react";
import GameContext from "../Context/GameContext";

//dom
import { useNavigate } from "react-router-dom";
//ui
import {
  Button,
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
import { playDoubleTamborineSFX } from "../Sound/SFX";

const gameStartSFX = playDoubleTamborineSFX;

export default function WarningModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { jumpChance, defaultJumpChance } = useContext(GameContext);

  const navigate = useNavigate();

  const handleClick = (preference) => {
    jumpChance.current = preference ? defaultJumpChance : 0;
    gameStartSFX();
    //Check if in iFrame (itch.io)
    document.startViewTransition(() =>
      window.self === window.top ? navigate("main") : onClose()
    );
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay
        className="entryBackground"
        backgroundImage={sanjo_palace}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
      >
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
            <Button className="modal-button" onClick={() => handleClick(true)}>
              I'm Ready for Hell!
            </Button>
            <Button className="modal-button" onClick={() => handleClick(false)}>
              Play Without Jump Scares
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
