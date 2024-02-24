import JumpToggle from "../Components/JumpToggle";
import MuteButton from "../Components/MuteButton";

export default function OptionsPage() {
  return (
    <div style={{ display: "flex" }}>
      <MuteButton />
      <JumpToggle />
    </div>
  );
}
