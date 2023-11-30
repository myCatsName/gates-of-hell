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
import FooterButton from "./FooterButton";

//Backgrounds
import shadowedBackground from "../Assets/Swatches/shadowedBackground.png";

const backgroundOptions = [shadowedBackground];
const backgroundToUse = 0;

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
          backgroundImage={backgroundOptions[backgroundToUse]}
          backgroundRepeat={"round"}
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
