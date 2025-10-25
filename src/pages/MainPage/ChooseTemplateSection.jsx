import { Templates } from "../../components/templates";
import SelectDropdown from "../../components/SelectDropdown";

function ChooseTemplateSection({ templateID, setTemplateID }) {
  return (
    <div className="flex flex-row items-center">
      <div className="font-semibold text-[0.9rem]">Choose Template</div>
      <SelectDropdown
        className="ml-6 flex-1"
        selected={
          <div className="font-medium text-[0.8rem] pl-3">
            {Templates.find((template) => template.id === templateID).name}
          </div>
        }
      >
        {Templates.map((templateObj) => {
          return (
            <div
              key={templateObj.id}
              className="pl-2 py-0.5 text-[0.8rem] hover:bg-[#282828] rounded-[0.2rem]"
              onClick={() => {
                setTemplateID(templateObj.id);
              }}
            >
              {templateObj.name}
            </div>
          );
        })}
      </SelectDropdown>
    </div>
  );
}

export default ChooseTemplateSection;
