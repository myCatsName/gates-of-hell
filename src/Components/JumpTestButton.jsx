import { useDisclosure } from "@chakra-ui/react";
import FooterButton from "./FooterButton";
import JumpDrawer from "./JumpDrawer";
import { VFX } from "../HelperFx/VFX";
// import { playGongs1SFX } from "../Sound/SFX";

export default function JumpTestButton() {
  const jumpTest = useDisclosure();

  const testJump = () => {
    VFX.JUMP.DARKHUESHAKE(jumpTest);
  };

  const testEffect = () => {
    setTimeout(() => {
      VFX.CARDEXIT.SPINSHRINKTOCENTER();
    }, 1000);
  };

  window.addEventListener(
    "keypress",
    (e) => e.code === "Space" && testEffect()
  );

  return (
    <FooterButton onClick={testJump}>
      Jump Test
      <JumpDrawer isOpen={jumpTest.isOpen} onClose={jumpTest.onClose} />
    </FooterButton>
  );
}
