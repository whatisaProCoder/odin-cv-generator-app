import Header from "../../components/Header";

import cvExample from "../../assets/images/cv-example.png";
import { useState } from "react";
import { Templates } from "../../components/templates";
import { AccentColors } from "../../constants/accentColors";
import InputField from "../../components/InputField";
import addIcon from "../../assets/icons/add-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import IconButton from "../../components/IconButton";
import Footer from "../../components/Footer";
import { useMediaQuery } from "react-responsive";
import ChooseTemplateSection from "./ChooseTemplateSection";
import PersonalInfoSection from "./PersonalInfoSection";
import SkillsSection from "./SkillsSection";
import ProfessionalExpSection from "./ProfessionalExpSection";

function MainPage() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

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
      <div
        className="pt-20 flex gap-6"
        style={{ flexDirection: isTablet ? "column" : "row" }}
      >
        <div className="px-6 flex flex-col flex-1">
          <ChooseTemplateSection
            templateID={templateID}
            setTemplateID={setTemplateID}
          />
          <PersonalInfoSection
            accentColorID={accentColorID}
            setAccentColorID={setAccentColorID}
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <SkillsSection skills={skills} setSkills={setSkills} />
          <ProfessionalExpSection
            accentColorID={accentColorID}
            professionalExperiences={professionalExperiences}
            setProfessionalExperiences={setProfessionalExperiences}
          />
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
                  <div className="flex flex-row gap-4 max-md:flex-col">
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
                  <div className="flex flex-row items-center gap-4 max-md:flex-col">
                    <div className="flex flex-row items-center gap-4 max-md:w-full">
                      <div className="text-[0.8rem] font-medium">
                        Start Date
                      </div>
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
                    </div>
                    <div className="flex flex-row items-center gap-4 max-md:w-full">
                      <div className="text-[0.8rem] font-medium max-md:mr-[0.4rem]">
                        End Date
                      </div>
                      <InputField
                        id="end-date"
                        type="month"
                        value={experience.endDate}
                        onChange={(e) => {
                          const newEducationExperiences = [
                            ...educationExperiences,
                          ];
                          newEducationExperiences[index].endDate =
                            e.target.value;
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
                      type="checkbox"
                      style={{
                        accentColor: AccentColors.find(
                          (accentColor) => accentColor.id === accentColorID
                        ).color,
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
                  className="flex flex-row items-center gap-4 max-md:flex-col max-md:items-stretch"
                >
                  {isTablet && (
                    <div className="flex flex-row items-center">
                      <div className="flex-1 h-0.5 mr-2 rounded bg-[#282828]" />
                      <button
                        className="h-6 w-6 flex items-center justify-center bg-[#282828] rounded"
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
                    style={{ flex: "2" }}
                  />
                  {!isTablet && (
                    <button
                      className="h-6 w-6"
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
                  )}
                </div>
              );
            })}
          </div>
          {!isTablet && <Footer style={{ marginTop: "4rem" }} />}
        </div>
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
        {isTablet && (
          <Footer
            style={{
              marginTop: "0",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />
        )}
      </div>
    </>
  );
}

export default MainPage;
