import { AccentColors } from "../../constants/accentColors";
import { convertDate } from "../../utils/dateConverter";

function UIUXDesigner({ cvData, ref }) {
  const accentColor = AccentColors.find(
    (accentColor) => accentColor.id === cvData.accentColorID
  ).color;

  const sampleData = {
    personalInfo: {
      name: "ESTELLE DARCY",
      jobRole: "UX DESIGNER",
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com",
      summary:
        "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams.",
    },
    skills: [
      "Prototyping Tools",
      "User Research",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
      "Usability Heuristics",
      "Accessibility",
      "Responsive Design",
      "User Testing Tools",
    ],
    projects: [
      {
        title: "Factory Analytics Dashboard",
        liveLink: "https://www.figma.com/proto/orion-dashboard-v1",
        repoLink: "https://github.com/orion/robotics-interface",
        details: [
          "Designed a real-time analytics dashboard translating complex factory data into actionable insights.",
          "Built a scalable Figma design system with data visualization components and WCAG AA accessibility.",
        ],
      },
      {
        title: "XarrowAI - Robotic Control Interface",
        liveLink: "https://www.reallygreatsite.com/case-study/xarrow-robotics",
        repoLink: "https://github.com/xarrow-ai/robotics-interface",
        details: [
          "Redesigned a robotic control panel, simplifying a 12-step programming task into a 4-step wizard.",
          "Worked with engineers to implement the React UI, ensuring feasibility on industrial hardware.",
        ],
      },
    ],
    professionalExperiences: [
      {
        projectOrRole: "Instant Chartz App",
        company: "Morcelle Program",
        startDate: "2023-01",
        endDate: "",
        workingAtPresent: true,
        workingDetails: [
          "Boosted operational efficiency 15% by leading automation system development.",
          "Cut production costs 10% through manufacturing process streamlining.",
          "Reduced equipment downtime 20% via new preventive maintenance strategies.",
        ],
      },
      {
        projectOrRole: "System UX Engineer",
        company: "Morcelle Program",
        startDate: "2021-02",
        endDate: "2022-12",
        workingAtPresent: false,
        workingDetails: [
          "Designed and optimised a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures.",
        ],
      },
    ],
    educationExperiences: [
      {
        course: "UX Industrial Basics and General Application",
        institute: "University of Engineering UX Cohort",
        startDate: "2016-08",
        endDate: "2019-10",
        studyingAtPresent: false,
        information: [
          "Major in Automotive Technology",
          'Thesis on "Technological Advancements within the current Mechatronics Industry".',
        ],
      },
      {
        course: "Bachelor of Design in Process Engineering",
        institute: "Engineering University",
        startDate: "2014-05",
        endDate: "2016-05",
        studyingAtPresent: false,
        information: [
          "Relevant coursework in Structural Design and Project Management.",
        ],
      },
    ],
    additionalInformations: [
      { point: "Languages", details: "English, French, Mandarin" },
      {
        point: "Certifications",
        details:
          "Professional Design Engineer (PDE) License, Project Management Tech (PMT)",
      },
      {
        point: "Awards/Activities",
        details:
          "Most Innovative Employer of the Year (2021), Overall Best Employee (2024)",
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
          <div className="w-[900px] h-[1270px] bg-white px-8 py-10 flex flex-col text-black font-[Poppins]">
            <div
              className={`text-[2.25rem] font-bold`}
              style={{ color: accentColor }}
            >
              {cvData.personalInfo.name.toUpperCase() ||
                sampleData.personalInfo.name}
            </div>
            <div className="text-[1.5rem] font-bold">
              {cvData.personalInfo.jobRole.toUpperCase() ||
                sampleData.personalInfo.jobRole}
            </div>
            <div>{`${
              cvData.personalInfo.address || "123 Anywhere St., Any City"
            } | ${cvData.personalInfo.email || "hello@reallygreatsite.com"} | ${
              cvData.personalInfo.website || "www.reallygreatsite.com"
            }`}</div>
            <div
              className="mt-8 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              SUMMARY
            </div>
            <div className="mt-1.5 text-justify">
              {cvData.personalInfo.summary || sampleData.personalInfo.summary}
            </div>
            <div
              className="mt-4 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              TECHNICAL SKILLS
            </div>
            <div
              className={`mt-1.5 grid grid-rows-3 grid-cols-${Math.ceil(
                skills.length / 3
              )} grid-flow-col`}
            >
              {skills.map((skill, index) => {
                return <div key={index}>{skill}</div>;
              })}
            </div>
            <div
              className="mt-4 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              PROJECTS
            </div>
            <div className="mt-1.5">
              {projects.map((project, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row items-center font-semibold gap-2">
                      <div>{project.title}</div>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        className="underline text-[#232efd]"
                      >
                        [GitHub]
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="underline text-[#232efd]"
                      >
                        [Link]
                      </a>
                    </div>
                    <ul className="ml-6 list-disc">
                      {project.details.map((detail, innerIndex) => {
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
              className="mt-4 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              PROFESSIONAL EXPERIENCE
            </div>
            <div className="mt-1.5">
              {professionalExperiences.map((profExp, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row justify-between font-semibold">
                      <div>{`${profExp.projectOrRole}${
                        profExp.company !== "" ? "," : ""
                      } ${profExp.company}`}</div>
                      <div>
                        {convertDate(profExp.startDate) +
                          " - " +
                          (profExp.workingAtPresent
                            ? "Present"
                            : convertDate(profExp.endDate))}
                      </div>
                    </div>
                    <ul className="ml-6 list-disc">
                      {profExp.workingDetails.map((detail, innerIndex) => {
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
              className="mt-4 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              EDUCATION
            </div>
            <div className="mt-1.5">
              {educationExperiences.map((eduExp, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row justify-between font-semibold">
                      <div>{eduExp.course}</div>
                      <div>
                        {convertDate(eduExp.startDate) +
                          " - " +
                          (eduExp.studyingAtPresent
                            ? "Present"
                            : convertDate(eduExp.endDate))}
                      </div>
                    </div>
                    <div>{eduExp.institute}</div>
                    <ul className="ml-6 list-disc">
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
              className="mt-4 border-t border-b px-4 py-1 font-bold"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              ADDITIONAL INFORMATION
            </div>
            <div className="mt-1.5">
              <ul className="list-disc ml-6">
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

export default UIUXDesigner;
