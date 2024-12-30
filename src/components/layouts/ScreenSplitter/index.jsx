import Left from "./Left";
import Right from "./Right";
import SplitScreen from "./SplitScreen";

const ScreenSplitter = () => {
  return (
    <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 translate-x-[-50%] translate-y-[-50%] text-white  bg-slate-600">
      <SplitScreen Left={Left} Right={Right} />
    </div>
  );
  // return <SplitScreen Left={Left} Right={Right} />;
};

export default ScreenSplitter;
