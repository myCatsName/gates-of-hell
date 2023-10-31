import "../App.css";
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
// import alt_red_swatch from "../Assets/Swatches/alt_red_swatch.png";
// import sanjo_palace2 from "../Assets/SanjoPalace2.jpg";

export default function WarningModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("Root");
  //   onClose();
  //   console.log("title screen modal closed, nav to main layout");
  // };

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
              onClick={onClose}
              backgroundColor={"brown"}
              border={"2px solid gold"}
              outline={"2px solid black"}
              textShadow={"0px 0px 2px gold"}
              _hover={{ backgroundColor: "gold", border: "2px solid brown" }}
              transition="all 0.3s ease-in-out"
            >
              I'm Ready for Hell!
            </Button>
            <Button
              onClick={onClose}
              backgroundColor={"brown"}
              border={"2px solid gold"}
              outline={"2px solid black"}
              textShadow={"0px 0px 2px gold"}
              _hover={{ backgroundColor: "gold", border: "2px solid brown" }}
              transition="all 0.3s ease-in-out"
            >
              Play Without Jump Scares
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
