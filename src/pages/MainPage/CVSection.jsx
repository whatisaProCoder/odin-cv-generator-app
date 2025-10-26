import { useMediaQuery } from "react-responsive";
import { AccentColors } from "../../constants/accentColors";

function CVSection({ cvData }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className="flex flex-col h-min"
      style={
        isTablet
          ? { padding: "1.5rem" }
          : { paddingRight: "3rem", position: "sticky", top: "5rem", flex: "1" }
      }
    >
      <button className="bg-[#2263C8] transition-colors border border-[#282828] text-white rounded-sm text-[0.75rem] w-24 py-0.75 font-semibold self-end">
        Download
      </button>
      <div className="mt-2 mb-6 w-full rounded-sm overflow-clip">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1120">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="w-[800px] h-[1120px] bg-white p-4 flex flex-col">
                <h1
                  class="text-2xl font-bold "
                  style={{
                    color: AccentColors.find(
                      (accentColor) => accentColor.id === cvData.accentColorID
                    ).color,
                  }}
                >
                  This is a 24px Font
                </h1>
                <p class="text-sm text-gray-700 mt-2">
                  This is a 14px font. It will shrink and grow.
                  {JSON.stringify(cvData)}
                </p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export default CVSection;
