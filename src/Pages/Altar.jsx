import Typewriter from "../Components/Typewriter";

export function Altar() {
  return (
    <div
      className="Altar"
      style={{
        textAlign: "center",
        fontSize: "6vw",
        fontFamily: "Allison, cursive",
      }}
    >
      <Typewriter text="Fudō is Coming" delay={75} pause={250} />
    </div>
  );
}
