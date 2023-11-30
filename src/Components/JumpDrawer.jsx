import { Drawer, DrawerContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Fudo_Icon from "../Assets/Fudo_icon.png";
import Tubo_Icon from "../Assets/TuboIconTrans.png";
import Bing1 from "../Assets/Jumps/bing1.jpg";
import Bing2 from "../Assets/Jumps/bing2.jpg";
import Bing3 from "../Assets/Jumps/bing3.jpg";
import Bing4 from "../Assets/Jumps/bing4.jpg";
import Bing5 from "../Assets/Jumps/bing5.jpg";
import Bing6 from "../Assets/Jumps/bing6.jpg";
import Horsehead from "../Assets/Jumps/horsehead.jpg";

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
        />
      </Drawer>
    </>
  );
}
