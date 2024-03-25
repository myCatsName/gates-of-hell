import { useEffect } from "react";
//side panel themes
import redSwatch from "../Assets/Swatches/background_swatch.png";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.webp";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.webp";
//card back themes
import card1 from "../Assets/CardFaces/PlayingCardReverse.webp";
import card2 from "../Assets/CardFaces/EmbossedFlowerCard.webp";
import card3 from "../Assets/CardFaces/ScrollCard2.webp";

const images = [bloodyeyes, greenSwatch, redSwatch, card1, card2, card3] ;


export default function Preloader (){

useEffect(() => {
    images.forEach((image) => {
      const imageElement = new Image();
      imageElement.src = image;
    })
  }, []);}
  