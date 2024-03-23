import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
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

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent
          className="optionsModal"
          textAlign={"center"}
          backgroundImage={very_dark_swatch}
          color={"green.400"}
          outline={"4px solid black"}
          textShadow={"2px 2px 5px black"}
          filter={`drop-shadow(0 20px 1rem rgba(14, 13, 13, 0.8))`}
        >
          <ModalBody>
            <OptionsPage />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={() => {
                onClose();
                playDoubleTamborineSFX();
              }}
              className="modal-button"
            >
              Go Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
