import { Button } from "@chakra-ui/react";
import brownUIBox from "../Assets/UI/brown_UI_Box.png";

export default function FooterButton({ children, onClick }) {
  return (
    <Button
      backgroundImage={brownUIBox}
      backgroundSize="100% 100%"
      border="3px solid black"
      boxShadow="0px 2px 2px brown"
      w="max(10vw,7rem)"
      h="max(5vh, 32px)"
      position="relative"
      top="-2vh"
      _hover={{
        backgroundImage: brownUIBox,
        border: "2px solid gold",
      }}
      _active={{
        backgroundImage: { brownUIBox },
        border: "2px solid gold",
        transform: `translateY(3px)`,
      }}
      transition="border 0.3s ease-in-out"
      onClick={onClick}
    >
      <span style={{ color: "gold", fontFamily: " " }}>{children}</span>
    </Button>
  );
}
