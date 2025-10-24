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

function MainPage() {
  const [templateID, setTemplateID] = useState(Templates[0].id);

  const [accentColorID, setAccentColorID] = useState(AccentColors[0].id);

  const [personalInfo, setaPersonalInfo] = useState({
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

  console.log(professionalExperiences);

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
                  {Templates[templateID].name}
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
                  className="h-3.5 w-3.5 rounded-full ml-1.5 mr-0.5"
                  style={{ backgroundColor: AccentColors[accentColorID].color }}
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
                setaPersonalInfo({ ...personalInfo, name: e.target.value });
              }}
            />
            <InputField
              id="job-role"
              placeholder="Job Role"
              value={personalInfo.jobRole}
              onChange={(e) => {
                setaPersonalInfo({ ...personalInfo, jobRole: e.target.value });
              }}
            />
            <InputField
              id="address"
              placeholder="Address"
              value={personalInfo.address}
              onChange={(e) => {
                setaPersonalInfo({ ...personalInfo, address: e.target.value });
              }}
              style={{ gridColumn: "span 2" }}
            />
            <InputField
              id="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) => {
                setaPersonalInfo({ ...personalInfo, email: e.target.value });
              }}
            />
            <InputField
              id="website"
              placeholder="Website"
              value={personalInfo.website}
              onChange={(e) => {
                setaPersonalInfo({ ...personalInfo, website: e.target.value });
              }}
            />
          </div>
          <div className="mt-12 font-semibold text-[0.9rem] mb-4">Summary</div>
          <InputField
            id="summary"
            value={personalInfo.summary}
            onChange={(e) => {
              setaPersonalInfo({ ...personalInfo, summary: e.target.value });
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
                    key={index}
                    id={"skill" + index}
                    placeholder={"Skill " + (index + 1)}
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index] = e.target.value;
                      setSkills(newSkills);
                      console.log(newSkills);
                    }}
                    style={{ flex: "1" }}
                  />
                  <img
                    src={closeIcon}
                    className="h-6 w-6 ml-3 transition-transform hover:scale-115"
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
                  />
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
                  <div className="text-[0.8rem] font-semibold">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col flex-1 pr-14">
          <button className="bg-[#2263C8] border border-[#282828] rounded-sm text-[0.75rem] w-24 py-0.75 font-semibold self-end">
            Download
          </button>
          <img src={cvExample} className="mt-2 mb-6 w-full" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
