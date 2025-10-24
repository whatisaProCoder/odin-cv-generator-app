function InputField({
  id,
  value,
  placeholder,
  onChange,
  style,
  textarea = false,
  type = "text",
  disabled,
}) {
  return textarea ? (
    <textarea
      style={style}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      className="transition-colors bg-[#191919] border-2 border-[#282828] text-[0.85rem] outline-none py-1.5 px-4 rounded-sm focus:border-[#868686] hover:border-[#505050]"
    />
  ) : (
    <input
      style={style}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      className="transition-colors bg-[#191919] border-2 border-[#282828] text-[0.85rem] outline-none py-1.5 px-4 rounded-sm focus:border-[#868686] hover:border-[#505050]"
    />
  );
}

export default InputField;
