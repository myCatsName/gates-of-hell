import Typewriter from "../Components/Typewriter";

export function Headline() {
  return (
    <div
      className="Headline"
      style={{
        textAlign: "center",
        fontSize: "12vh",
        fontFamily: "Allison, cursive",
      }}
    >
      <Typewriter text="Fudō is Coming" delay={75} pause={250} />
    </div>
  );
}
