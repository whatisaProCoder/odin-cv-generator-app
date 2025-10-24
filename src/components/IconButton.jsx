function IconButton({ onClick, iconSrc, className = "", text }) {
  return (
    <button
      className={
        "transition-colors bg-[#1E1E1E] hover:bg-[#282828] border border-[#282828] rounded-sm font-medium text-[0.8rem] py-0.5 px-2 flex flex-row items-center" +
        className
      }
      onClick={onClick}
    >
      <img src={iconSrc} className="h-3 w-3 mr-1.5" />
      {text}
    </button>
  );
}

export default IconButton;
