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
import sanjo_palace from "../Assets/sanjo_palace_burning.jpg";

//SFX
import { doubleTambourineSFX } from "../Sound/SFX";

const gameStartSFX = doubleTambourineSFX;

export default function WarningModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { setAllowJumps } = useContext(GameContext);

  const navigate = useNavigate();

  const handleClick = (preference) => {
    setAllowJumps(preference);
    gameStartSFX.play();
    //Check if in iFrame (itch.io)
    window.self === window.top ? navigate("main") : onClose();
    console.log(
      "Jumps: " + preference,
      "\n Title screen modal nav to main layout"
    );
  };

  //TODO: why do button backgrounds not work in css file??
  return (
    <Modal size="lg" isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay
        backgroundImage={sanjo_palace}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <ModalContent
          textAlign={"center"}
          backgroundImage={very_dark_swatch}
          color={"green.400"}
          border={"3px solid black"}
          textShadow={"2px 2px 5px black"}
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
              onClick={() => handleClick(true)}
              className="WarningModalButton"
              backgroundColor={"brown"}
              _hover={{ backgroundColor: "gold", border: "2px solid brown" }}
            >
              I'm Ready for Hell!
            </Button>
            <Button
              onClick={() => handleClick(false)}
              className="WarningModalButton"
              backgroundColor={"brown"}
              _hover={{ backgroundColor: "gold", border: "2px solid brown" }}
            >
              Play Without Jump Scares
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
