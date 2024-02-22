import { Drawer, DrawerContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Fudo_Icon from "../Assets/Fudo_icon.webp";
import Tubo_Icon from "../Assets/TuboIconTrans.webp";
import Bing1 from "../Assets/Jumps/bing1.webp";
import Bing2 from "../Assets/Jumps/bing2.webp";
import Bing3 from "../Assets/Jumps/bing3.webp";
import Bing4 from "../Assets/Jumps/bing4.webp";
import Bing5 from "../Assets/Jumps/bing5.webp";
import Bing6 from "../Assets/Jumps/bing6.webp";
import Horsehead from "../Assets/Jumps/horsehead.webp";

const jumpImage = [
  Fudo_Icon,
  Tubo_Icon,
  Bing1,
  Bing2,
  Bing3,
  Bing4,
  Bing5,
  Bing6,
  Horsehead,
];

const randomImage = () => {
  return jumpImage[Math.floor(Math.random() * jumpImage.length)];
};

const placementDirection = ["top", "right", "bottom", "left"];
const randomDirection = () => {
  return placementDirection[
    Math.floor(Math.random() * placementDirection.length)
  ];
};

export default function JumpDrawer({ isOpen, onClose }) {
  const [currentJump, setCurrentJump] = useState(randomImage);

  useEffect(() => {
    setCurrentJump(randomImage);
  }, [isOpen]);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={randomDirection()}
        onClose={onClose}
        size={"full"}
      >
        <DrawerContent
          backgroundColor="transparent"
          backgroundImage={currentJump}
          backgroundRepeat={"no-repeat"}
          bgSize={"contain"}
          backgroundPosition={"center"}
          boxShadow={"none"}
        />
      </Drawer>
    </>
  );
}
