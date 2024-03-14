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

import { playTamborineSFX, playDoubleTamborineSFX } from "../Sound/SFX";

import very_dark_swatch from "../Assets/Swatches/very_dark_swatch.png";
import FooterButton from "./FooterButton";
import OptionsPage from "../Pages/OptionsPage";

export default function OptionsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FooterButton
        onClick={() => {
          onOpen();
          playTamborineSFX();
        }}
      >
        Options
      </FooterButton>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          textAlign={"center"}
          backgroundImage={very_dark_swatch}
          color={"green.400"}
          border={"4px solid black"}
          textShadow={"2px 2px 5px black"}
        >
          <ModalHeader
            textAlign="center"
            fontSize="2xl"
            textDecor={"underline"}
          >
            OPTIONS
          </ModalHeader>
          <ModalBody textAlign="justify" p="20px">
            <OptionsPage />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={() => {
                onClose();
                playDoubleTamborineSFX();
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
