import InputField from "../../components/InputField";
import IconButton from "../../components/IconButton";

import { AccentColors } from "../../constants/accentColors";

import closeIcon from "../../assets/icons/close-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

function ProfessionalExpSection({
  educationExperiences,
  setEducationExperiences,
}) {
  const handleAddEducationExperience = () => {
    const newEducationExperiences = [...educationExperiences];
    newEducationExperiences.push({
      course: "",
      institute: "",
      startDate: "",
      endDate: "",
      studyingAtPresent: false,
      information: ["", "", ""],
    });
    setEducationExperiences(newEducationExperiences);
  };

  return (
    <>
      <div className="mt-12 flex flex-row items-center mb-4">
        <div className="font-semibold text-[0.9rem] flex-1">Education</div>
        <IconButton
          onClick={handleAddEducationExperience}
          iconSrc={addIcon}
          text="ADD"
        />
      </div>
      <div className="mt-4 flex flex-col gap-6">
        {educationExperiences.map((experience, index) => {
          return (
            <div
              key={"eduexp" + index}
              className="flex flex-col gap-4 p-4 border border-[#282828] rounded-md"
            >
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.85rem] font-semibold">
                  {"Education " + (index + 1)}
                </div>
                <button
                  className="h-6 w-6 flex items-center justify-center bg-[#282828] transition-colors hover:bg-[#323232] border border-[#323232] rounded"
                  onClick={() => {
                    let newEducationExperiences = [...educationExperiences];
                    newEducationExperiences = [
                      ...newEducationExperiences.slice(0, index),
                      ...newEducationExperiences.slice(index + 1),
                    ];
                    if (newEducationExperiences.length === 0) {
                      newEducationExperiences = [
                        {
                          course: "",
                          institute: "",
                          startDate: "",
                          endDate: "",
                          studyingAtPresent: false,
                          information: ["", "", ""],
                        },
                      ];
                    }
                    setEducationExperiences(newEducationExperiences);
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
                  id={`course-${index}`}
                  value={experience.course}
                  placeholder="Course"
                  onChange={(e) => {
                    const newEducationExperiences = [...educationExperiences];
                    newEducationExperiences[index].course = e.target.value;
                    setEducationExperiences(newEducationExperiences);
                  }}
                  style={{ flex: "1" }}
                />
                <InputField
                  id={`institute-${index}`}
                  value={experience.institute}
                  placeholder="Institute"
                  onChange={(e) => {
                    const newEducationExperiences = [...educationExperiences];
                    newEducationExperiences[index].institute = e.target.value;
                    setEducationExperiences(newEducationExperiences);
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
                      const newEducationExperiences = [...educationExperiences];
                      newEducationExperiences[index].startDate = e.target.value;
                      setEducationExperiences(newEducationExperiences);
                    }}
                    style={{ flex: "1" }}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 max-md:w-full md:flex-1">
                  <div className="text-[0.8rem] font-medium max-md:mr-[0.4rem]">
                    End Date
                  </div>
                  <InputField
                    id={`start-date-${index}`}
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => {
                      const newEducationExperiences = [...educationExperiences];
                      newEducationExperiences[index].endDate = e.target.value;
                      setEducationExperiences(newEducationExperiences);
                    }}
                    style={{ flex: "1" }}
                    disabled={experience.studyingAtPresent ? true : false}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-[0.8rem] font-medium">
                  Studying at present?
                </div>
                <input
                  id={`studying-at-present-${index}`}
                  type="checkbox"
                  style={{
                    accentColor: "#2263C8",
                    transform: "scale(1.25)",
                  }}
                  onChange={(e) => {
                    const newEducationExperiences = [...educationExperiences];
                    newEducationExperiences[index].studyingAtPresent =
                      e.target.checked;
                    setEducationExperiences(newEducationExperiences);
                  }}
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.8rem] font-medium">
                  Information
                </div>
                <IconButton
                  onClick={() => {
                    const newEducationExperiences = [...educationExperiences];
                    newEducationExperiences[index].information.push("");
                    setEducationExperiences(newEducationExperiences);
                  }}
                  iconSrc={addIcon}
                  text="New Point"
                />
              </div>
              <div className="flex flex-col gap-4">
                {experience.information.map((point, innerIndex) => {
                  return (
                    <div
                      key={"information" + index + innerIndex}
                      className="flex flex-row items-center"
                    >
                      <InputField
                        id={"information" + index + innerIndex}
                        value={point}
                        placeholder={"Information " + (innerIndex + 1)}
                        onChange={(e) => {
                          const newEducationExperiences = [
                            ...educationExperiences,
                          ];
                          newEducationExperiences[index].information[
                            innerIndex
                          ] = e.target.value;
                          setEducationExperiences(newEducationExperiences);
                        }}
                        style={{ flex: "1" }}
                      />
                      <button
                        onClick={() => {
                          let newEducationExperiences = [
                            ...educationExperiences,
                          ];
                          newEducationExperiences[index].information = [
                            ...newEducationExperiences[index].information.slice(
                              0,
                              innerIndex
                            ),
                            ...newEducationExperiences[index].information.slice(
                              innerIndex + 1
                            ),
                          ];
                          if (
                            newEducationExperiences[index].information
                              .length === 0
                          ) {
                            newEducationExperiences[index].information = [
                              "",
                              "",
                              "",
                            ];
                          }
                          setEducationExperiences(newEducationExperiences);
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
