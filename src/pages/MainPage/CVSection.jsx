import { useMediaQuery } from "react-responsive";
import { AccentColors } from "../../constants/accentColors";
import cvExample from "../../assets/images/cv-example.png";

function CVSection({ accentColorID }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className="flex flex-col h-min"
      style={
        isTablet
          ? { padding: "1.5rem" }
          : { paddingRight: "3rem", position: "sticky", top: "5rem" }
      }
    >
      <button
        style={{
          backgroundColor: AccentColors.find(
            (accentColor) => accentColor.id === accentColorID
          ).color,
        }}
        className="border border-[#282828] text-white rounded-sm text-[0.75rem] w-24 py-0.75 font-semibold self-end"
      >
        Download
      </button>
      <img alt="Sample CV" src={cvExample} className="mt-2 mb-6 w-full" />
    </div>
  );
}

export default CVSection;
