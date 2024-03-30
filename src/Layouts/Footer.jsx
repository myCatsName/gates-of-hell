import AboutButton from "../Components/AboutButton";
import TrackSelector from "../Components/TrackSelector";
import FutenBowed from "../Components/FutenBowed";
import NohDrummer from "../Components/NohDrummer";
import OptionsButton from "../Components/OptionsModal";
import ThemeButton from "../Components/ThemeButton";
// import FolkLoreDrawer from "../Components/FolkLoreDrawer";
// import JumpTestButton from "../Components/JumpTestButton";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <NohDrummer />
      <TrackSelector />
      <ThemeButton />
      <OptionsButton />
      {/* <FolkLoreDrawer /> */}
      {/* <JumpTestButton /> */}
      <AboutButton />
      <FutenBowed />
    </div>
  );
}
