export const VFX = {
    'JUMP':{
        'DARKJUMP' : (jump) => {const sidePanels = document.querySelectorAll(".sidePanel");
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.add("GrayJumpFilter"));
        }, 100);
        jump.onOpen();
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.remove("GrayJumpFilter"));
        }, 1500);
        setTimeout(() => {
          jump.onClose();
        }, 1500);}
        ,
        'DARKHUESHAKE' : (jump) => {
        const sidePanels = document.querySelectorAll(".sidePanel");
        const cards = document.querySelectorAll(".GameCard");
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.add("GrayJumpFilter"));
          cards.forEach((card) => {
            card.classList.add("cardHueFilter", "cardShake");
            card.setAttribute(
              "style",
              `--hue-variable: ${Math.floor(Math.random() * 150)}deg`
              // `--hue-variable: ${Math.floor(Math.random() * 4550)}deg`
            );
          });
        }, 100);
        jump.onOpen();
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.remove("GrayJumpFilter"));
          cards.forEach((card) =>
            card.classList.remove("cardHueFilter", "cardShake")
          );
        }, 1500);
        setTimeout(() => {
          jump.onClose();
        }, 1500);
      },
      'DARKSHAKE' : (jump) => {
        const sidePanels = document.querySelectorAll(".sidePanel");
        const cards = document.querySelectorAll(".GameCard");
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.add("GrayJumpFilter"));
          cards.forEach((card) => {
            card.classList.add( "cardShake");
          });
        }, 100);
        jump.onOpen();
        setTimeout(() => {
          sidePanels.forEach((side) => side.classList.remove("GrayJumpFilter"));
          cards.forEach((card) =>
            card.classList.remove("cardShake")
          );
        }, 1500);
        setTimeout(() => {
          jump.onClose();
        }, 1500);
    },
    },
  "CARDEXIT":
      {'SIMPLEFADE': ()=> {document
    .querySelectorAll(".GameCard")
    .forEach(
      (card) => card.classList.add("gameCardFadeOut"));
    },
    "SPINSHRINKTOCENTER": ()=> { const gameLayout = document.querySelector(".MemoryGameLayout");
    const cards = document.querySelectorAll(".GameCard");
 gameLayout.classList.add("scaleToZero");
    cards.forEach((card) => card.classList.add("cardSpin","gameCardFadeOut"));
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("cardSpin"));
      gameLayout.classList.remove("scaleToZero");
    }, 5000);
  }}
}
