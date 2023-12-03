import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import very_dark_swatch from "../Assets/Swatches/very_dark_swatch.png";
import FooterButton from "./FooterButton";

import { cleansingBellSFX, slapSFX } from "../Sound/SFX";
const sfxOnClick = cleansingBellSFX;
const sfxOnClose = slapSFX;

export default function AboutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FooterButton
        onClick={() => {
          onOpen();
          sfxOnClick.play();
        }}
      >
        About
      </FooterButton>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          textAlign={"center"}
          backgroundImage={very_dark_swatch}
          color={"green.400"}
          border={"3px solid black"}
          textShadow={"2px 2px 5px black"}
        >
          <ModalHeader
            textAlign="center"
            fontSize="2xl"
            textDecor={"underline"}
            color="gold"
          >
            Fudō Myōō at the Gate of Hell
          </ModalHeader>
          <ModalBody textAlign="center" p="20px">
            <h2>Design and Music by myCatsName</h2>
            <Text>
              <br />
              Art from Wikipedia
              <br />
              "OM" and other sound effects by "Freesound.org" and "Jagadamba"
              <br />
              "Tubo" icon made with Bing AI, and copyright myCatsName
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={() => {
                onClose();
                sfxOnClose.play();
              }}
              backgroundColor={"brown"}
              border={"2px solid gold"}
              textShadow={"0px 0px 2px gold"}
              _hover={{ backgroundColor: "gold", border: "2px solid brown" }}
              transition="all 0.3s ease-in-out"
            >
              Go Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
