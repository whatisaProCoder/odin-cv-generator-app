import InputField from "../../components/InputField";
import IconButton from "../../components/IconButton";

import closeIcon from "../../assets/icons/close-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

function ProjectSection({ projects, setProjects }) {
  const handleAddProjects = () => {
    const newProjects = [...projects];
    newProjects.push({
      title: "",
      liveLink: "",
      repoLink: "",
      details: ["", "", ""],
    });
    setProjects(newProjects);
  };

  return (
    <>
      <div className="mt-12 flex flex-row items-center mb-4">
        <div className="font-semibold text-[0.9rem] flex-1">Projects</div>
        <IconButton onClick={handleAddProjects} iconSrc={addIcon} text="ADD" />
      </div>
      <div className="mt-4 flex flex-col gap-6">
        {projects.map((project, index) => {
          return (
            <div
              key={"project" + index}
              className="flex flex-col gap-4 p-4 border border-[#282828] rounded-md"
            >
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.85rem] font-semibold">
                  {"Project " + (index + 1)}
                </div>
                <button
                  className="h-6 w-6 flex items-center justify-center bg-[#282828] transition-colors hover:bg-[#323232] border border-[#323232] rounded"
                  onClick={() => {
                    let newProjects = [...projects];
                    newProjects = [
                      ...newProjects.slice(0, index),
                      ...newProjects.slice(index + 1),
                    ];
                    if (newProjects.length === 0) {
                      newProjects = [
                        {
                          title: "",
                          liveLink: "",
                          repoLink: "",
                          details: ["", "", ""],
                        },
                      ];
                    }
                    setProjects(newProjects);
                  }}
                >
                  <img
                    src={closeIcon}
                    alt="Close Button"
                    className="h-6 w-6 transition-transform hover:scale-115"
                  />
                </button>
              </div>
              <InputField
                id={`project-title-${index}`}
                value={project.title}
                placeholder="Title"
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].title = e.target.value;
                  setProjects(newProjects);
                }}
                style={{ flex: "1" }}
              />
              <div className="flex flex-row gap-4 max-md:flex-col">
                <InputField
                  id={`live-link-${index}`}
                  value={project.liveLink}
                  placeholder="Deployment Link"
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].liveLink = e.target.value;
                    setProjects(newProjects);
                  }}
                  style={{ flex: "1" }}
                />
                <InputField
                  id={`repo-link-${index}`}
                  value={project.repoLink}
                  placeholder="Repository Link"
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].repoLink = e.target.value;
                    setProjects(newProjects);
                  }}
                  style={{ flex: "1" }}
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="flex-1 text-[0.8rem] font-medium">
                  Working Details / Features
                </div>
                <IconButton
                  onClick={() => {
                    const newProjects = [...projects];
                    newProjects[index].details.push("");
                    setProjects(newProjects);
                  }}
                  iconSrc={addIcon}
                  text="New Point"
                />
              </div>
              <div className="flex flex-col gap-4">
                {project.details.map((point, innerIndex) => {
                  return (
                    <div
                      key={"detail" + index + innerIndex}
                      className="flex flex-row items-center"
                    >
                      <InputField
                        id={"detail" + index + innerIndex}
                        value={point}
                        placeholder={"Feature " + (innerIndex + 1)}
                        onChange={(e) => {
                          const newProjects = [...projects];
                          newProjects[index].details[innerIndex] =
                            e.target.value;
                          setProjects(newProjects);
                        }}
                        style={{ flex: "1" }}
                      />
                      <button
                        onClick={() => {
                          let newProjects = [...projects];
                          newProjects[index].details = [
                            ...newProjects[index].details.slice(0, innerIndex),
                            ...newProjects[index].details.slice(innerIndex + 1),
                          ];
                          if (newProjects[index].details.length === 0) {
                            newProjects[index].details = ["", "", ""];
                          }
                          setProjects(newProjects);
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

export default ProjectSection;
