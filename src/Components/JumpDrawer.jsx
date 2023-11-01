import { Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

import FooterButton from "./FooterButton";

import Fudo_Icon from "../Assets/Fudo_icon.png";
import Tubo_Icon from "../Assets/TuboIconTrans.png";

const jumpImage = [Fudo_Icon, Tubo_Icon];
const randomImage = () => {
  return jumpImage[Math.floor(Math.random() * jumpImage.length)];
};

const placementDirection = ["top", "right", "bottom", "left"];
const randomDirection = () => {
  return placementDirection[
    Math.floor(Math.random() * placementDirection.length)
  ];
};

export default function JumpDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <FooterButton onClick={handleClick}>Jump</FooterButton>

      <Drawer
        isOpen={isOpen}
        placement={randomDirection()}
        onClose={onClose}
        size={"full"}
      >
        <DrawerContent
          backgroundColor="transparent"
          backgroundImage={randomImage}
          backgroundRepeat={"no-repeat"}
          bgSize={"cover"}
        />
      </Drawer>
    </>
  );
}
