import { useContext, useEffect } from "react";
import GameContext from "../Context/GameContext";
import ThemeContext from "../Context/ThemeContext";

//side panel themes
import redSwatch from "../Assets/Swatches/background_swatch.webp";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.webp";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.webp";
//card back themes
import card1 from "../Assets/CardFaces/PlayingCardReverse.webp";
import card2 from "../Assets/CardFaces/EmbossedFlowerCard.webp";
import card3 from "../Assets/CardFaces/ScrollCard2.webp";
//layout
import AltarImage from "../Assets/Fudo_Altar_Medium.webp";
import Noh_drummer from "../Assets/YoungManPlayingaNohDrum4.webp";
import headerLinen from "../Assets/Swatches/possible_header_background.webp";
import Futen_Bowed from "../Assets/Futen_bowed_trans.webp";

//jump images
import Fudo_Icon from "../Assets/Fudo_icon.webp";
// import Tubo_Icon from "../Assets/TuboIconTrans.webp";
import Bing1 from "../Assets/Jumps/bing1.webp";
import Bing2 from "../Assets/Jumps/bing2.webp";
import Bing3 from "../Assets/Jumps/bing3.webp";
import Bing4 from "../Assets/Jumps/bing4.webp";
import Bing5 from "../Assets/Jumps/bing5.webp";
import Bing6 from "../Assets/Jumps/bing6.webp";
import Horsehead from "../Assets/Jumps/horsehead.webp";

const jumpImage = [
  Fudo_Icon,
  // Tubo_Icon,
  Bing1,
  Bing2,
  Bing3,
  Bing4,
  Bing5,
  Bing6,
  Horsehead,
];
const layoutImages = [ AltarImage, Noh_drummer, headerLinen, Futen_Bowed] ;
const themeImages = [bloodyeyes, greenSwatch, redSwatch, card1, card2, card3,]

//TODO: preloading can be more accurate to current theme and jumps and not preload full batches
export default function Preloader (){
  const {jumpChance, loadGame} = useContext(GameContext)
  const {currentTheme} = useContext(ThemeContext)

  function preload(array){
    array.forEach((image) => {
      const imageElement = new Image();
      imageElement.src = image;
    })
  }

useEffect(() => {
    preload(layoutImages)
    const background = new Image()
    background.src = `${require("../Assets/Swatches/" +
    currentTheme.background)}`
    const card = new Image()
    card.src = `${require("../Assets/CardFaces/" +
    currentTheme.cardBack)}` 
  }, [currentTheme]);

useEffect(() => {setTimeout(()=>{
    preload(themeImages)
  },1500)}, []);

  useEffect(()=>
  {if (loadGame && jumpChance.current !== 0) {setTimeout(()=>{preload(jumpImage)},5000)}},[loadGame, jumpChance])
  }
  