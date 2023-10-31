import FolkLoreDrawer from "../Components/FolkLoreDrawer";
import OptionsButton from "../Components/OptionsModal";
import AboutButton from "../Components/AboutButton";
import FutenBowed from "../Components/FutenBowed";
import { MemoryGameFooterButton } from "../Components/MemoryGameFooterButton";
import TrackSelector from "../Components/TrackSelector";
import NohDrummer from "../Components/NohDrummer";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      {/* <MemoryGameFooterButton /> */}
      <NohDrummer />
      <TrackSelector />
      {/* <OptionsButton /> */}
      <FolkLoreDrawer />
      <AboutButton />
      <FutenBowed />
    </div>
  );
}
