import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Templates } from "../../components/templates";

function CVSection({ cvData }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const svgRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: svgRef,
    documentTitle: cvData.personalInfo.name
      ? `${cvData.personalInfo.name}_CV`
      : "CV_Generated",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        margin: 0;
      }
    `,
  });

  const CVComponent = Templates.find(
    (template) => template.id === cvData.templateID
  ).component;

  return (
    <div
      className="flex flex-col h-min"
      style={
        isTablet
          ? { padding: "1.5rem" }
          : { paddingRight: "3rem", position: "sticky", top: "5rem", flex: "1" }
      }
    >
      <button
        className="bg-[#2263C8] transition-colors border border-[#282828] text-white rounded-sm text-[0.75rem] w-24 py-0.75 font-semibold self-end"
        onClick={handlePrint}
      >
        Download
      </button>
      <div className="mt-2 mb-6 w-full rounded-sm overflow-clip">
        <CVComponent cvData={cvData} ref={svgRef} />
      </div>
    </div>
  );
}

export default CVSection;
