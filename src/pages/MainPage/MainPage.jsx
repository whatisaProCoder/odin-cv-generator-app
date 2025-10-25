import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Templates } from "../../components/templates";
import { AccentColors } from "../../constants/accentColors";
import Footer from "../../components/Footer";
import { useMediaQuery } from "react-responsive";
import ChooseTemplateSection from "./ChooseTemplateSection";
import PersonalInfoSection from "./PersonalInfoSection";
import SkillsSection from "./SkillsSection";
import ProfessionalExpSection from "./ProfessionalExpSection";
import EducationExpSection from "./EducationExpSection";
import AdditionalInfoSection from "./AdditionalInfoSection";
import CVSection from "./CVSection";

function MainPage() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const [loaded, setLoaded] = useState(false);

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

  // Load saved CV on mount
  useEffect(() => {
    const savedCV = localStorage.getItem("cvData");
    if (savedCV) {
      const cvData = JSON.parse(savedCV);

      setTemplateID(cvData.templateID ?? Templates[0].id);
      setAccentColorID(cvData.accentColorID ?? AccentColors[0].id);
      setPersonalInfo(cvData.personalInfo ?? personalInfo);
      setSkills(cvData.skills ?? ["", "", ""]);
      setProfessionalExperiences(
        cvData.professionalExperiences ?? professionalExperiences
      );
      setEducationExperiences(
        cvData.educationExperiences ?? educationExperiences
      );
      setAdditionalInformations(
        cvData.additionalInformations ?? additionalInformations
      );
    }
    setLoaded(true);
  }, []);

  // Autosave effect
  useEffect(() => {
    if (!loaded) return;

    const CVObject = {
      templateID,
      accentColorID,
      personalInfo,
      skills,
      professionalExperiences,
      educationExperiences,
      additionalInformations,
    };
    localStorage.setItem("cvData", JSON.stringify(CVObject));
  }, [
    templateID,
    accentColorID,
    personalInfo,
    skills,
    professionalExperiences,
    educationExperiences,
    additionalInformations,
    loaded,
  ]);

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
          <EducationExpSection
            accentColorID={accentColorID}
            educationExperiences={educationExperiences}
            setEducationExperiences={setEducationExperiences}
          />
          <AdditionalInfoSection
            additionalInformations={additionalInformations}
            setAdditionalInformations={setAdditionalInformations}
          />
          {!isTablet && <Footer style={{ marginTop: "4rem" }} />}
        </div>
        <CVSection accentColorID={accentColorID} />
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
