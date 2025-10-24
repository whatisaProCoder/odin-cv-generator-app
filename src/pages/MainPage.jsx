import Header from "../components/Header";

import cvExample from "../assets/images/cv-example.png";
import { useState } from "react";
import { Templates } from "../components/templates";
import SelectDropdown from "../components/SelectDropdown";
import { AccentColors } from "../constants/accentColors";
import InputField from "../components/InputField";
import addIcon from "../assets/icons/add-icon.svg";
import closeIcon from "../assets/icons/close-icon.svg";
import IconButton from "../components/IconButton";
import Footer from "../components/Footer";

function MainPage() {
  const [templateID, setTemplateID] = useState(Templates[0].id);

  const [accentColorID, setAccentColorID] = useState(AccentColors[0].id);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    jobRole: "",
    address: "",
    email: "",
    website: "",
    summary: "",
  });

  const [skills, setSkills] = useState(["", "", ""]);

  const [professionalExperiences, setProfessionalExperiences] = useState([
    {
      projectOrRole: "",
      company: "",
      startDate: "",
      endDate: "",
      workingAtPresent: false,
      workingDetails: ["", "", ""],
    },
  ]);

  const [educationExperiences, setEducationExperiences] = useState([
    {
      course: "",
      institute: "",
      startDate: "",
      endDate: "",
      studyingAtPresent: false,
      information: ["", "", ""],
    },
  ]);

  const [additionalInformations, setAdditionalInformations] = useState([
    { point: "", details: "" },
    { point: "", details: "" },
    { point: "", details: "" },
  ]);

  const handleAddSkills = () => {
    const newSkills = [...skills];
    newSkills.push("");
    setSkills(newSkills);
  };

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

  const handleAddAdditionalInformation = () => {
    const newAdditionalInformations = [...additionalInformations];
    newAdditionalInformations.push({ point: "", details: "" });
    setAdditionalInformations(newAdditionalInformations);
  };

  const CVObject = {
    templateID: templateID,
    accentColorID: accentColorID,
    personalInfo: personalInfo,
    skills: skills,
    professionalExperiences: professionalExperiences,
    educationExperiences: educationExperiences,
    additionalInformations: additionalInformations,
  };

  console.log(CVObject);

  return (
    <>
      <Header />
      <div className="pt-20 flex flex-row gap-6">
        <div className="px-6 flex flex-col flex-1">
          <div className="flex flex-row items-center">
            <div className="font-semibold text-[0.9rem]">Choose Template</div>
            <SelectDropdown
              className="ml-6 flex-1"
              selected={
                <div className="font-medium text-[0.8rem] pl-3">
                  {
                    Templates.find((template) => template.id === templateID)
                      .name
                  }
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
          <div className="mt-12 flex flex-row items-center">
            <div className="font-semibold text-[0.9rem] flex-1">
              Personal Information
            </div>
            <SelectDropdown
              selected={
                <div
                  className="h-3.5 w-3.5 rounded-full ml-1.5 mr-0.5 transition-colors"
                  style={{
                    backgroundColor: AccentColors.find(
                      (accentColor) => accentColor.id === accentColorID
                    ).color,
                  }}
                />
              }
            >
              {AccentColors.map((accentColor) => {
                return (
                  <div
                    key={accentColor.id}
                    className="h-4 w-full rounded-[0.2rem]"
                    style={{ backgroundColor: accentColor.color }}
                    onClick={() => {
                      setAccentColorID(accentColor.id);
                    }}
                  />
                );
              })}
            </SelectDropdown>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <InputField
              id="name"
              placeholder="Name"
              value={personalInfo.name}
              onChange={(e) => {
                setPersonalInfo({ ...personalInfo, name: e.target.value });
              }}
            />
            <InputField
              id="job-role"
              placeholder="Job Role"
              value={personalInfo.jobRole}
              onChange={(e) => {
                setPersonalInfo({ ...personalInfo, jobRole: e.target.value });
              }}
            />
            <InputField
              id="address"
              placeholder="Address"
              value={personalInfo.address}
              onChange={(e) => {
                setPersonalInfo({ ...personalInfo, address: e.target.value });
              }}
              style={{ gridColumn: "span 2" }}
            />
            <InputField
              id="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) => {
                setPersonalInfo({ ...personalInfo, email: e.target.value });
              }}
            />
            <InputField
              id="website"
              placeholder="Website"
              value={personalInfo.website}
              onChange={(e) => {
                setPersonalInfo({ ...personalInfo, website: e.target.value });
              }}
            />
          </div>
          <div className="mt-12 font-semibold text-[0.9rem] mb-4">Summary</div>
          <InputField
            id="summary"
            value={personalInfo.summary}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, summary: e.target.value });
            }}
            textarea={true}
            style={{ height: "10rem" }}
          />
          <div className="mt-12 flex flex-row items-center mb-4">
            <div className="font-semibold text-[0.9rem] flex-1">Skills</div>
            <IconButton
              onClick={handleAddSkills}
              iconSrc={addIcon}
              text="ADD"
            />
          </div>
          <div className="mt-2 flex flex-col gap-4">
            {skills.map((skill, index) => {
              return (
                <div
                  key={"skills" + index}
                  className="flex flex-row items-center"
                >
                  <InputField
                    id={"skill" + index}
                    placeholder={"Skill " + (index + 1)}
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index] = e.target.value;
                      setSkills(newSkills);
                    }}
                    style={{ flex: "1" }}
                  />
                  <button
                    onClick={() => {
                      let newSkills = [
                        ...skills.slice(0, index),
                        ...skills.slice(index + 1),
                      ];
                      if (newSkills.length === 0) {
                        newSkills = ["", "", ""];
                      }
                      setSkills(newSkills);
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
                <div key={"profexp" + index} className="flex flex-col gap-4">
                  <div className="text-[0.85rem] font-semibold">
                    {"Experience " + (index + 1)}
                  </div>
                  <div className="flex flex-row gap-4">
                    <InputField
                      id="project-role"
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
                      id="company"
                      value={experience.company}
                      placeholder="Company"
                      onChange={(e) => {
                        const newProfessionalExperiences = [
                          ...professionalExperiences,
                        ];
                        newProfessionalExperiences[index].company =
                          e.target.value;
                        setProfessionalExperiences(newProfessionalExperiences);
                      }}
                      style={{ flex: "1" }}
                    />
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="text-[0.8rem] font-medium">Start Date</div>
                    <InputField
                      id="start-date"
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
                    <div className="text-[0.8rem] font-medium">End Date</div>
                    <InputField
                      id="end-date"
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
                  <div className="flex flex-row gap-3">
                    <div className="text-[0.8rem] font-medium">
                      Working at present?
                    </div>
                    <input
                      type="checkbox"
                      style={{
                        accentColor: "#e1e1e1",
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
                        newProfessionalExperiences[index].workingDetails.push(
                          ""
                        );
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
                            key={"workingdetail" + index + innerIndex}
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
                              newProfessionalExperiences[index].workingDetails =
                                [
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
                                newProfessionalExperiences[
                                  index
                                ].workingDetails = ["", "", ""];
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
                <div key={"eduexp" + index} className="flex flex-col gap-4">
                  <div className="text-[0.85rem] font-semibold">
                    {"Education " + (index + 1)}
                  </div>
                  <div className="flex flex-row gap-4">
                    <InputField
                      id="course"
                      value={experience.course}
                      placeholder="Course"
                      onChange={(e) => {
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
                        newEducationExperiences[index].course = e.target.value;
                        setEducationExperiences(newEducationExperiences);
                      }}
                      style={{ flex: "1" }}
                    />
                    <InputField
                      id="institute"
                      value={experience.institute}
                      placeholder="Institute"
                      onChange={(e) => {
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
                        newEducationExperiences[index].institute =
                          e.target.value;
                        setEducationExperiences(newEducationExperiences);
                      }}
                      style={{ flex: "1" }}
                    />
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="text-[0.8rem] font-medium">Start Date</div>
                    <InputField
                      id="start-date"
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => {
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
                        newEducationExperiences[index].startDate =
                          e.target.value;
                        setEducationExperiences(newEducationExperiences);
                      }}
                      style={{ flex: "1" }}
                    />
                    <div className="text-[0.8rem] font-medium">End Date</div>
                    <InputField
                      id="end-date"
                      type="month"
                      value={experience.endDate}
                      onChange={(e) => {
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
                        newEducationExperiences[index].endDate = e.target.value;
                        setEducationExperiences(newEducationExperiences);
                      }}
                      style={{ flex: "1" }}
                      disabled={experience.studyingAtPresent ? true : false}
                    />
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="text-[0.8rem] font-medium">
                      Studying at present?
                    </div>
                    <input
                      type="checkbox"
                      style={{
                        accentColor: "#e1e1e1",
                        transform: "scale(1.25)",
                      }}
                      onChange={(e) => {
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
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
                        const newEducationExperiences = [
                          ...educationExperiences,
                        ];
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
                            key={"information" + index + innerIndex}
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
                                ...newEducationExperiences[
                                  index
                                ].information.slice(0, innerIndex),
                                ...newEducationExperiences[
                                  index
                                ].information.slice(innerIndex + 1),
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
                  className="flex flex-row items-center"
                >
                  <InputField
                    id={"additionalinfopoint" + index}
                    value={info.point}
                    placeholder={"Point " + (index + 1)}
                    onChange={(e) => {
                      const newAdditionalInformations = [
                        ...additionalInformations,
                      ];
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
                      const newAdditionalInformations = [
                        ...additionalInformations,
                      ];
                      newAdditionalInformations[index].details = e.target.value;
                      setAdditionalInformations(newAdditionalInformations);
                    }}
                    style={{ flex: "2", marginLeft: "1rem" }}
                  />
                  <button
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
                      className="h-6 w-6 ml-3 transition-transform hover:scale-115"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <Footer style={{ marginTop: "4rem" }} />
        </div>
        <div className="flex flex-col flex-1 pr-12 sticky top-20 h-min">
          <button className="bg-[#2263C8] border border-[#282828] rounded-sm text-[0.75rem] w-24 py-0.75 font-semibold self-end">
            Download
          </button>
          <img alt="Sample CV" src={cvExample} className="mt-2 mb-6 w-full" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
