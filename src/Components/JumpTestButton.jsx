import { useDisclosure } from "@chakra-ui/react";
import FooterButton from "./FooterButton";
import JumpDrawer from "./JumpDrawer";

export default function JumpTestButton() {
  const jumpTest = useDisclosure();
  const handleClick = () => {
    jumpTest.onOpen();
    setTimeout(() => jumpTest.onClose(), 1500);
  };

  return (
    <FooterButton onClick={handleClick}>
      Jump Test
      <JumpDrawer isOpen={jumpTest.isOpen} onClose={jumpTest.onClose} />
    </FooterButton>
  );
}
