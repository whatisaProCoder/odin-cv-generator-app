function Footer({ style }) {
  return (
    <div
      style={style}
      className="bg-[#171717] border border-[#1E1E1E] px-4 py-6 rounded-tl-sm rounded-tr-sm flex flex-row justify-center items-center font-medium text-[0.75rem]"
    >
      Made with 💙 and React, by
      <a
        href="https://www.github.com/whatisaProCoder"
        className="text-[#3B83F2] font-bold ml-1 underline"
      >
        whatisaProCoder
      </a>
      .
    </div>
  );
}

export default Footer;
