import InputField from "../../components/InputField";
import IconButton from "../../components/IconButton";

import closeIcon from "../../assets/icons/close-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

import { useMediaQuery } from "react-responsive";

function AdditionalInfoSection({
  additionalInformations,
  setAdditionalInformations,
}) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const handleAddAdditionalInformation = () => {
    const newAdditionalInformations = [...additionalInformations];
    newAdditionalInformations.push({ point: "", details: "" });
    setAdditionalInformations(newAdditionalInformations);
  };

  return (
    <>
      <div className="mt-12 flex flex-row items-center mb-4">
        <div className="font-semibold text-[0.9rem] flex-1">
          Additional Information
        </div>
        <IconButton
          onClick={handleAddAdditionalInformation}
          iconSrc={addIcon}
          text="ADD"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {additionalInformations.map((info, index) => {
          return (
            <div
              key={"additionalinfo" + index}
              className="flex flex-row items-center gap-4 max-md:flex-col max-md:items-stretch"
            >
              {isTablet && (
                <div className="flex flex-row items-center">
                  <div className="flex-1 h-px mr-2 rounded bg-[#282828]" />
                  <button
                    className="h-6 w-6 flex items-center justify-center bg-[#282828] transition-colors hover:bg-[#323232] border border-[#323232] rounded"
                    onClick={() => {
                      let newAdditionalInformations = [
                        ...additionalInformations,
                      ];
                      newAdditionalInformations = [
                        ...newAdditionalInformations.slice(0, index),
                        ...newAdditionalInformations.slice(index + 1),
                      ];
                      if (newAdditionalInformations.length === 0) {
                        newAdditionalInformations = [
                          { point: "", details: "" },
                          { point: "", details: "" },
                          { point: "", details: "" },
                        ];
                      }
                      setAdditionalInformations(newAdditionalInformations);
                    }}
                  >
                    <img
                      src={closeIcon}
                      alt="Close Button"
                      className="h-6 w-6 transition-transform hover:scale-115"
                    />
                  </button>
                </div>
              )}
              <InputField
                id={"additionalinfopoint" + index}
                value={info.point}
                placeholder={"Category " + (index + 1)}
                onChange={(e) => {
                  const newAdditionalInformations = [...additionalInformations];
                  newAdditionalInformations[index].point = e.target.value;
                  setAdditionalInformations(newAdditionalInformations);
                }}
                style={{ flex: "1" }}
              />
              <InputField
                id={"additionalinfodetail" + index}
                value={info.details}
                placeholder="Details"
                onChange={(e) => {
                  const newAdditionalInformations = [...additionalInformations];
                  newAdditionalInformations[index].details = e.target.value;
                  setAdditionalInformations(newAdditionalInformations);
                }}
                style={{ flex: "2" }}
              />
              {!isTablet && (
                <button
                  className="h-6 w-6"
                  onClick={() => {
                    let newAdditionalInformations = [...additionalInformations];
                    newAdditionalInformations = [
                      ...newAdditionalInformations.slice(0, index),
                      ...newAdditionalInformations.slice(index + 1),
                    ];
                    if (newAdditionalInformations.length === 0) {
                      newAdditionalInformations = [
                        { point: "", details: "" },
                        { point: "", details: "" },
                        { point: "", details: "" },
                      ];
                    }
                    setAdditionalInformations(newAdditionalInformations);
                  }}
                >
                  <img
                    src={closeIcon}
                    alt="Close Button"
                    className="h-6 w-6 transition-transform hover:scale-115"
                  />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdditionalInfoSection;
