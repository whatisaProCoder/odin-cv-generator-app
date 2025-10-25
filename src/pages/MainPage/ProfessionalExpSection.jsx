import InputField from "../../components/InputField";
import IconButton from "../../components/IconButton";

import { AccentColors } from "../../constants/accentColors";

import closeIcon from "../../assets/icons/close-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

function ProfessionalExpSection({
  professionalExperiences,
  setProfessionalExperiences,
}) {
  const handleAddProfessionalExperience = () => {
    const newProfessionalExperiences = [...professionalExperiences];
    newProfessionalExperiences.push({
      projectOrRole: "",
      company: "",
      startDate: "",
      endDate: "",
      workingAtPresent: false,
      workingDetails: ["", "", ""],
    });
    setProfessionalExperiences(newProfessionalExperiences);
  };

  return (
    <>
      <div className="mt-12 flex flex-row items-center mb-4">
        <div className="font-semibold text-[0.9rem] flex-1">
          Professional Experience
        </div>
        <IconButton
          onClick={handleAddProfessionalExperience}
          iconSrc={addIcon}
          text="ADD"
        />
      </div>
      <div className="mt-4 flex flex-col gap-6">
        {professionalExperiences.map((experience, index) => {
          return (
            <div
              key={"profexp" + index}
              className="flex flex-col gap-4 p-4 border border-[#282828] rounded-md"
            >
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.85rem] font-semibold">
                  {"Experience " + (index + 1)}
                </div>
                <button
                  className="h-6 w-6 flex items-center justify-center bg-[#282828] transition-colors hover:bg-[#323232] border border-[#323232] rounded"
                  onClick={() => {
                    let newProfessionalExperiences = [
                      ...professionalExperiences,
                    ];
                    newProfessionalExperiences = [
                      ...newProfessionalExperiences.slice(0, index),
                      ...newProfessionalExperiences.slice(index + 1),
                    ];
                    if (newProfessionalExperiences.length === 0) {
                      newProfessionalExperiences = [
                        {
                          projectOrRole: "",
                          company: "",
                          startDate: "",
                          endDate: "",
                          workingAtPresent: false,
                          workingDetails: ["", "", ""],
                        },
                      ];
                    }
                    setProfessionalExperiences(newProfessionalExperiences);
                  }}
                >
                  <img
                    src={closeIcon}
                    alt="Close Button"
                    className="h-6 w-6 transition-transform hover:scale-115"
                  />
                </button>
              </div>
              <div className="flex flex-row gap-4 max-md:flex-col">
                <InputField
                  id={`project-role-${index}`}
                  value={experience.projectOrRole}
                  placeholder="Project / Role"
                  onChange={(e) => {
                    const newProfessionalExperiences = [
                      ...professionalExperiences,
                    ];
                    newProfessionalExperiences[index].projectOrRole =
                      e.target.value;
                    setProfessionalExperiences(newProfessionalExperiences);
                  }}
                  style={{ flex: "1" }}
                />
                <InputField
                  id={`company-${index}`}
                  value={experience.company}
                  placeholder="Company"
                  onChange={(e) => {
                    const newProfessionalExperiences = [
                      ...professionalExperiences,
                    ];
                    newProfessionalExperiences[index].company = e.target.value;
                    setProfessionalExperiences(newProfessionalExperiences);
                  }}
                  style={{ flex: "1" }}
                />
              </div>
              <div className="flex flex-row items-center gap-4 max-md:flex-col">
                <div className="flex flex-row items-center gap-4 max-md:w-full md:flex-1">
                  <div className="text-[0.8rem] font-medium">Start Date</div>
                  <InputField
                    id={`start-date-${index}`}
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => {
                      const newProfessionalExperiences = [
                        ...professionalExperiences,
                      ];
                      newProfessionalExperiences[index].startDate =
                        e.target.value;
                      setProfessionalExperiences(newProfessionalExperiences);
                    }}
                    style={{ flex: "1" }}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 max-md:w-full md:flex-1">
                  <div className="text-[0.8rem] font-medium max-md:mr-[0.4rem]">
                    End Date
                  </div>
                  <InputField
                    id={`end-date-${index}`}
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => {
                      const newProfessionalExperiences = [
                        ...professionalExperiences,
                      ];
                      newProfessionalExperiences[index].endDate =
                        e.target.value;
                      setProfessionalExperiences(newProfessionalExperiences);
                    }}
                    style={{ flex: "1" }}
                    disabled={experience.workingAtPresent ? true : false}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-[0.8rem] font-medium">
                  Working at present?
                </div>
                <input
                  id={`working-at-present-${index}`}
                  type="checkbox"
                  style={{
                    accentColor: "#2263C8",
                    transform: "scale(1.25)",
                  }}
                  onChange={(e) => {
                    const newProfessionalExperiences = [
                      ...professionalExperiences,
                    ];
                    newProfessionalExperiences[index].workingAtPresent =
                      e.target.checked;
                    setProfessionalExperiences(newProfessionalExperiences);
                  }}
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.8rem] font-medium">
                  Working Details / Achievements
                </div>
                <IconButton
                  onClick={() => {
                    const newProfessionalExperiences = [
                      ...professionalExperiences,
                    ];
                    newProfessionalExperiences[index].workingDetails.push("");
                    setProfessionalExperiences(newProfessionalExperiences);
                  }}
                  iconSrc={addIcon}
                  text="New Point"
                />
              </div>
              <div className="flex flex-col gap-4">
                {experience.workingDetails.map((point, innerIndex) => {
                  return (
                    <div
                      key={"workingdetail" + index + innerIndex}
                      className="flex flex-row items-center"
                    >
                      <InputField
                        id={"workingdetail" + index + innerIndex}
                        value={point}
                        placeholder={"Achievement " + (innerIndex + 1)}
                        onChange={(e) => {
                          const newProfessionalExperiences = [
                            ...professionalExperiences,
                          ];
                          newProfessionalExperiences[index].workingDetails[
                            innerIndex
                          ] = e.target.value;
                          setProfessionalExperiences(
                            newProfessionalExperiences
                          );
                        }}
                        style={{ flex: "1" }}
                      />
                      <button
                        onClick={() => {
                          let newProfessionalExperiences = [
                            ...professionalExperiences,
                          ];
                          newProfessionalExperiences[index].workingDetails = [
                            ...newProfessionalExperiences[
                              index
                            ].workingDetails.slice(0, innerIndex),
                            ...newProfessionalExperiences[
                              index
                            ].workingDetails.slice(innerIndex + 1),
                          ];
                          if (
                            newProfessionalExperiences[index].workingDetails
                              .length === 0
                          ) {
                            newProfessionalExperiences[index].workingDetails = [
                              "",
                              "",
                              "",
                            ];
                          }
                          setProfessionalExperiences(
                            newProfessionalExperiences
                          );
                        }}
                      >
                        <img
                          src={closeIcon}
                          alt="Close Button"
                          className="h-6 w-6 ml-3 transition-transform hover:scale-115"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProfessionalExpSection;
