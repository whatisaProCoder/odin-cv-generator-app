import InputField from "../../components/InputField";
import SelectDropdown from "../../components/SelectDropdown";
import { AccentColors } from "../../constants/accentColors";

function PersonalInfoSection({
  accentColorID,
  setAccentColorID,
  personalInfo,
  setPersonalInfo,
}) {
  return (
    <>
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
    </>
  );
}

export default PersonalInfoSection;
