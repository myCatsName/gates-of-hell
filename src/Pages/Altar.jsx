import Typewriter from "../Components/Typewriter";

export function Altar() {
  return (
    <div
      className="Altar"
      style={{
        textAlign: "center",
        alignSelf: "center",
        fontSize: "2em",
        fontFamily: "Allison, cursive",
      }}
    >
      <Typewriter text="Fudō is Coming" delay={150} />
    </div>
  );
}
