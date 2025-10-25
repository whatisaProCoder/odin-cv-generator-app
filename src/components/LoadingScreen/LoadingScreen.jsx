import "./style.css";

function LoadingScreen({ style }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#141414] z-50 fade">
      <div className="flex flex-row items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div
          style={style}
          className="border-[#2263C8] border-4 border-r-[#ededed] rounded-full h-8 w-8 spin bg-[#141414]"
        ></div>
        <div className="ml-4 text-[1.25rem]">Please Wait...</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
