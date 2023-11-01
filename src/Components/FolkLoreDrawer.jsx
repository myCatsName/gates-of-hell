import {
  Center,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import shadowedBackground from "../Assets/Swatches/shadowedBackground.png";
import FooterButton from "./FooterButton";

export default function FolkLoreDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <FooterButton onClick={handleClick}>FolkLore</FooterButton>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="#999"
          backgroundImage={shadowedBackground}
          backgroundRepeat={"round"}
          /* bgSize={"cover"} */
        >
          <CloseButton onClick={onClose} />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Center>Coming Soon</Center>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
