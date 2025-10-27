import { AccentColors } from "../../constants/accentColors";
import { convertDate } from "../../utils/dateConverter";

function SoftwareEngineer({ cvData, ref }) {
  const accentColor = AccentColors.find(
    (accentColor) => accentColor.id === cvData.accentColorID
  ).color;

  const sampleData = {
    personalInfo: {
      name: "ALEX JOHNSON",
      jobRole: "FULL-STACK DEVELOPER",
      address: "456 Data Dr., Techville",
      email: "alex.johnson@devmail.com",
      website: "www.alexjohnson.dev",
      summary:
        "Results-driven Full-Stack Developer with 4+ years of experience building and maintaining scalable web applications. Proficient in the MERN stack and cloud-native technologies. Passionate about writing clean, efficient code and solving complex problems.",
    },
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Git & GitHub",
      "Docker",
      "AWS (S3, EC2)",
      "REST APIs",
    ],
    projects: [
      {
        title: "CodeConnect - Real-time Collab Editor",
        liveLink: "https://codeconnect.vercel.app",
        repoLink: "https://github.com/alexjohnson/codeconnect",
        details: [
          "Built a real-time collaborative code editor using WebSockets (Socket.io) and a React frontend.",
          "Implemented room-based authentication and synchronized text editing across multiple clients.",
        ],
      },
      {
        title: "GourmetAPI - Recipe Service",
        liveLink: "https://gourmet-api.heroku.app",
        repoLink: "https://github.com/alexjohnson/gourmet-api",
        details: [
          "Developed a RESTful API with Node.js and Express for managing user-submitted recipes.",
          "Integrated JWT for secure user authentication and used PostgreSQL for data persistence.",
        ],
      },
    ],
    professionalExperiences: [
      {
        projectOrRole: "Software Engineer",
        company: "TechSolutions Inc.",
        startDate: "2022-03",
        endDate: "",
        workingAtPresent: true,
        workingDetails: [
          "Develop and maintain microservices for an e-commerce platform using Node.js and TypeScript.",
          "Optimized database queries, reducing API response latency by 30%.",
          "Containerized applications using Docker and managed deployments on AWS.",
        ],
      },
      {
        projectOrRole: "Junior Developer",
        company: "TechSolutions Inc.",
        startDate: "2020-06",
        endDate: "2022-02",
        workingAtPresent: false,
        workingDetails: [
          "Built and maintained responsive client-facing websites using React and Redux.",
          "Collaborated in an Agile team to ship new features and fix bugs.",
          "Wrote unit tests using Jest, improving code coverage by 20%.",
        ],
      },
    ],
    educationExperiences: [
      {
        course: "Bachelor of Science in Computer Science",
        institute: "Global Tech University",
        startDate: "2016-08",
        endDate: "2020-05",
        studyingAtPresent: false,
        information: [
          "Relevant Coursework: Data Structures & Algorithms, Database Systems, Software Engineering.",
          "Senior Project: 'Machine Learning Model for Stock Prediction'.",
        ],
      },
    ],
    additionalInformations: [
      {
        point: "Languages",
        details: "English (Native), Spanish (Conversational)",
      },
      {
        point: "Certifications",
        details:
          "AWS Certified Cloud Practitioner, Scrum Master Certified (SMC)",
      },
      {
        point: "Interests",
        details:
          "Open Source Contribution, Competitive Programming, 3D Printing",
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
          <div className="w-[900px] h-[1270px] bg-white pt-10 flex flex-col text-black font-[Poppins]">
            <div
              className="text-[2.25rem] font-bold text-center"
              style={{ color: accentColor }}
            >
              {cvData.personalInfo.name.toUpperCase() ||
                sampleData.personalInfo.name}
            </div>
            <div className="text-center">{`${
              cvData.personalInfo.address || "123 Anywhere St., Any City"
            } | ${cvData.personalInfo.email || "hello@reallygreatsite.com"} | ${
              cvData.personalInfo.website || "www.reallygreatsite.com"
            }`}</div>
            <div className="mt-2 text-[1.5rem] font-bold text-center">
              {cvData.personalInfo.jobRole.toUpperCase() ||
                sampleData.personalInfo.jobRole}
            </div>
            <div
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              SUMMARY
            </div>
            <div className="mt-1.5 px-8 text-justify">
              {cvData.personalInfo.summary || sampleData.personalInfo.summary}
            </div>
            <div
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              TECHNICAL SKILLS
            </div>
            <div
              className={`mt-1.5 px-8 grid grid-rows-3 grid-cols-${Math.ceil(
                skills.length / 3
              )} grid-flow-col`}
            >
              {skills.map((skill, index) => {
                return <div key={index}>{skill}</div>;
              })}
            </div>
            <div
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              PROJECTS
            </div>
            <div className="mt-1.5 px-8">
              {projects.map((project, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row items-center font-semibold gap-2">
                      <div>{project.title}</div>
                      {project.repoLink !== "" && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          className="underline text-[#232efd]"
                        >
                          [GitHub]
                        </a>
                      )}
                      {project.liveLink !== "" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          className="underline text-[#232efd]"
                        >
                          [Link]
                        </a>
                      )}
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
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              WORK EXPERIENCE
            </div>
            <div className="mt-1.5 px-8">
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
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              EDUCATION
            </div>
            <div className="mt-1.5 px-8">
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
              className={`mt-6 px-8 py-1 font-bold`}
              style={{
                backgroundColor: `${accentColor}16`,
                color: accentColor,
              }}
            >
              ADDITIONAL INFORMATION
            </div>
            <div className="mt-1.5 px-8">
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

export default SoftwareEngineer;
