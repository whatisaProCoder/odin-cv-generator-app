function InputField({
  id,
  value,
  placeholder,
  onChange,
  style,
  textarea = false,
}) {
  return textarea ? (
    <textarea
      style={style}
      type="text"
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className="bg-[#1A1A1A] border border-[#282828] text-[0.9rem] outline-none py-2 px-4 rounded-sm"
    />
  ) : (
    <input
      style={style}
      type="text"
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className="bg-[#1A1A1A] border border-[#282828] text-[0.9rem] outline-none py-2 px-4 rounded-sm"
    />
  );
}

export default InputField;
