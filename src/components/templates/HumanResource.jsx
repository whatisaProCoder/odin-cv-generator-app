import { AccentColors } from "../../constants/accentColors";
import { getYear } from "../../utils/dateConverter";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import skillIcon from "../../assets/icons/skill-icon.svg";
import projectIcon from "../../assets/icons/project-icon.svg";
import educationIcon from "../../assets/icons/education-icon.svg";
import workIcon from "../../assets/icons/work-icon.svg";
import additionalInfoIcon from "../../assets/icons/additional-info-icon.svg";
import Icon from "@mdi/react";
import { mdiCrosshairsGps } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiWeb } from "@mdi/js";

function HumanResource({ cvData, ref }) {
  const accentColor = AccentColors.find(
    (accentColor) => accentColor.id === cvData.accentColorID
  ).color;

  const sampleData = {
    personalInfo: {
      name: "Sarah Chen",
      jobRole: "Marketing Manager",
      address: "789 Market St., San Francisco",
      email: "sarah.chen@mail.com",
      website: "www.sarahchenmarketing.com",
      summary:
        "Data-driven B2B tech marketer with 6+ years of experience. I build multi-channel strategies to boost brand awareness, generate qualified leads, and grow sales. Expertise in SEO, content, and automation.",
    },
    skills: [
      "Digital Marketing Strategy",
      "SEO/SEM",
      "Content Marketing",
      "PPC Campaign Management",
      "Marketing Automation (HubSpot)",
      "Data Analysis & Reporting",
      "Lead Generation",
      "Social Media Marketing",
      "Team Leadership",
    ],
    projects: [
      {
        title: "Project 'Launchpad' - New Product Launch",
        liveLink: "https://www.company.com/case-study/launchpad",
        repoLink: "https://www.behance.net/portfolio/launchpad-g2m",
        details: [
          "Led go-to-market strategy for a new SaaS product targeting mid-market tech.",
          "Managed $50K launch budget (paid search, social) and exceeded lead goals by 20%.",
        ],
      },
      {
        title: "Content Marketing Engine Overhaul",
        liveLink: "https://www.company.com/blog",
        repoLink: "https://www.my-analytics-dashboard-screenshot.com/report-1",
        details: [
          "Overhauled the company blog with a new, SEO-driven content strategy.",
          "Grew organic traffic 120% in 9 months; boosted blog lead conversion 35%.",
        ],
      },
    ],
    professionalExperiences: [
      {
        projectOrRole: "Marketing Manager",
        company: "Innovate Solutions Ltd.",
        startDate: "2021-06",
        endDate: "",
        workingAtPresent: true,
        workingDetails: [
          "Led a team of 4; grew MQLs 40% year-over-year with integrated campaigns.",
          "Managed $250K budget and optimized ad spend, reducing CPL by 18%.",
          "Directed content strategy; increased organic traffic 75% via SEO.",
        ],
      },
      {
        projectOrRole: "Digital Marketing Specialist",
        company: "TechForward Inc.",
        startDate: "2018-02",
        endDate: "2021-05",
        workingAtPresent: false,
        workingDetails: [
          "Managed Google & LinkedIn PPC campaigns, improving CTR by 25%.",
          "Grew LinkedIn following from 5K to 20K; boosted engagement 60%.",
          "Built HubSpot nurture streams, improving lead conversion by 15%.",
        ],
      },
    ],
    educationExperiences: [
      {
        course: "Master of Business Administration (MBA)",
        institute: "State University, College of Business",
        startDate: "2016-08",
        endDate: "2018-05",
        studyingAtPresent: false,
        information: [
          "Specialization in Marketing",
          "VP of the Graduate Marketing Association",
        ],
      },
      {
        course: "Bachelor of Arts in Communication",
        institute: "City College",
        startDate: "2012-08",
        endDate: "2016-05",
        studyingAtPresent: false,
        information: ["Graduated with highest distinction"],
      },
    ],
    additionalInformations: [
      {
        point: "Languages",
        details: "English (Native), Spanish (Professional)",
      },
      {
        point: "Certifications",
        details:
          "HubSpot Inbound Marketing Certified, Google Ads Search Certified",
      },
      {
        point: "Awards",
        details: "Innovate Solutions 'Marketer of the Year' (2023)",
      },
    ],
  };

  let skills;
  if (cvData.skills.some((skill) => skill !== "")) {
    skills = cvData.skills;
  } else {
    skills = sampleData.skills;
  }

  let projects;
  if (cvData.projects[0].title !== "") {
    projects = cvData.projects;
  } else {
    projects = sampleData.projects;
  }

  let professionalExperiences;
  if (cvData.professionalExperiences[0].projectOrRole !== "") {
    professionalExperiences = cvData.professionalExperiences;
  } else {
    professionalExperiences = sampleData.professionalExperiences;
  }

  let educationExperiences;
  if (cvData.educationExperiences[0].course !== "") {
    educationExperiences = cvData.educationExperiences;
  } else {
    educationExperiences = sampleData.educationExperiences;
  }

  let additionalInformations;
  if (cvData.additionalInformations.some((info) => info.point !== "")) {
    additionalInformations = cvData.additionalInformations;
  } else {
    additionalInformations = sampleData.additionalInformations;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1270" ref={ref}>
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div className="w-[900px] h-[1270px] bg-white flex flex-row text-[#181818] font-[Poppins]">
            <div
              className="w-[35%] pt-14 px-6 flex flex-col"
              style={{ backgroundColor: `${accentColor}16` }}
            >
              <div
                className="text-[2.5rem] font-medium text-center"
                style={{ color: accentColor }}
              >
                {cvData.personalInfo.name || sampleData.personalInfo.name}
              </div>
              <div className="mt-2 text-[1.25rem] text-center">
                {cvData.personalInfo.jobRole || sampleData.personalInfo.jobRole}
              </div>
              <div
                className="mt-12 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={phoneIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">Contact</div>
              </div>
              <div className="text-[0.9rem]">
                <div className="mt-6 flex flex-row items-center gap-2">
                  <Icon
                    path={mdiCrosshairsGps}
                    size={0.9}
                    color={accentColor}
                  />
                  {cvData.personalInfo.address ||
                    sampleData.personalInfo.address}
                </div>
                <div className="mt-6 flex flex-row items-center gap-2">
                  <Icon path={mdiEmailOutline} size={0.9} color={accentColor} />
                  {cvData.personalInfo.email || sampleData.personalInfo.email}
                </div>
                <div className="mt-6 flex flex-row items-center gap-2">
                  <Icon path={mdiWeb} size={0.9} color={accentColor} />
                  {cvData.personalInfo.website ||
                    sampleData.personalInfo.website}
                </div>
              </div>
              <div
                className="mt-12 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={userIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">About Me</div>
              </div>
              <div className="mt-6 text-[0.9rem] text-justify leading-6">
                {cvData.personalInfo.summary || sampleData.personalInfo.summary}
              </div>
              <div
                className="mt-12 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={skillIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">Skills</div>
              </div>
              <ul className="list-disc p-6 flex flex-col gap-4 text-[1rem]">
                {skills.map((skill, index) => {
                  return <li key={`skill-${index}`}>{skill}</li>;
                })}
              </ul>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <div
                className="mt-6 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={projectIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">Projects</div>
              </div>
              <div>
                {projects.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className="mt-4 pl-4 border-l-2 rounded-md"
                      style={{ borderColor: accentColor }}
                    >
                      <div className="flex flex-row items-center font-semibold gap-2">
                        <div className="flex-1">{project.title}</div>
                        {project.repoLink !== "" && (
                          <a
                            href={`https://${project.repoLink}`}
                            target="_blank"
                            className="underline text-[#232efd]"
                          >
                            [GitHub]
                          </a>
                        )}
                        {project.liveLink !== "" && (
                          <a
                            href={`https://${project.liveLink}`}
                            target="_blank"
                            className="underline text-[#232efd]"
                          >
                            [Link]
                          </a>
                        )}
                      </div>
                      <div className="text-[0.9rem]">
                        {project.details.map((detail, innerIndex) => {
                          return (
                            detail !== "" && (
                              <span key={`${index}-${innerIndex}`}>
                                {detail}{" "}
                              </span>
                            )
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-6 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={educationIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">
                  Education
                </div>
              </div>
              <div>
                {educationExperiences.map((eduExp, index) => {
                  return (
                    <div
                      key={index}
                      className="mt-4 pl-4 border-l-2 rounded-md"
                      style={{ borderColor: accentColor }}
                    >
                      <div className="flex flex-row justify-between font-semibold">
                        <div>{eduExp.course}</div>
                        <div>
                          {getYear(eduExp.startDate) +
                            " - " +
                            (eduExp.studyingAtPresent
                              ? "Present"
                              : getYear(eduExp.endDate))}
                        </div>
                      </div>
                      <div className="text-[0.9rem] font-semibold">
                        {eduExp.institute}
                      </div>
                      <ul className="ml-6 list-disc text-[0.9rem]">
                        {eduExp.information.map((detail, innerIndex) => {
                          return (
                            detail !== "" && (
                              <li key={`${index}-${innerIndex}`}>{detail}</li>
                            )
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-6 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={workIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">
                  Experience
                </div>
              </div>
              <div>
                {professionalExperiences.map((profExp, index) => {
                  return (
                    <div
                      key={index}
                      className="mt-4 pl-4 border-l-2 rounded-md"
                      style={{ borderColor: accentColor }}
                    >
                      <div className="flex flex-row justify-between font-semibold">
                        <div>{profExp.projectOrRole}</div>
                        <div>
                          {getYear(profExp.startDate) +
                            " - " +
                            (profExp.workingAtPresent
                              ? "Present"
                              : getYear(profExp.endDate))}
                        </div>
                      </div>
                      <div className="text-[0.9rem] font-semibold">
                        {profExp.company}
                      </div>
                      <div className="text-[0.9rem]">
                        {profExp.workingDetails.map((detail, innerIndex) => {
                          return (
                            detail !== "" && (
                              <span key={`${index}-${innerIndex}`}>
                                {detail}{" "}
                              </span>
                            )
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-6 flex flex-row items-center border-b py-3"
                style={{ borderColor: accentColor }}
              >
                <img alt="Contact" src={additionalInfoIcon} />
                <div className="ml-4 font-semibold text-[1.4rem]">
                  Additional Information
                </div>
              </div>
              <ul
                className="pl-4 mt-4 text-[0.9rem] border-l-2 rounded-md flex flex-col gap-1"
                style={{ borderColor: accentColor }}
              >
                {additionalInformations.map((info, index) => {
                  return (
                    <li key={index}>
                      <span className="font-semibold">{info.point}:</span>{" "}
                      {info.details}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

export default HumanResource;
