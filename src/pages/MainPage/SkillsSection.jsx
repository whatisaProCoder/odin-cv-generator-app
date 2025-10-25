import InputField from "../../components/InputField";
import IconButton from "../../components/IconButton";

import closeIcon from "../../assets/icons/close-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

function SkillsSection({ skills, setSkills }) {
  const handleAddSkills = () => {
    const newSkills = [...skills];
    newSkills.push("");
    setSkills(newSkills);
  };

  return (
    <>
      <div className="mt-12 flex flex-row items-center mb-4">
        <div className="font-semibold text-[0.9rem] flex-1">Skills</div>
        <IconButton onClick={handleAddSkills} iconSrc={addIcon} text="ADD" />
      </div>
      <div className="mt-2 flex flex-col gap-4">
        {skills.map((skill, index) => {
          return (
            <div key={"skills" + index} className="flex flex-row items-center">
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
    </>
  );
}

export default SkillsSection;
