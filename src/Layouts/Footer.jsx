import AboutButton from "../Components/AboutButton";
import TrackSelector from "../Components/TrackSelector";
import FolkLoreDrawer from "../Components/FolkLoreDrawer";
import FutenBowed from "../Components/FutenBowed";
import NohDrummer from "../Components/NohDrummer";
import OptionsButton from "../Components/OptionsModal";
import ThemeButton from "../Components/ThemeButton";
import JumpDrawer from "../Components/JumpDrawer";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <NohDrummer />
      <TrackSelector />
      <ThemeButton />
      {/* <OptionsButton /> */}
      <FolkLoreDrawer />
      <JumpDrawer />
      <AboutButton />
      <FutenBowed />
    </div>
  );
}
