/* eslint-disable react/prop-types */
const SplitScreen = ({ Left, Right }) => {
  return (
    <div className="flex border-4 rounded-lg border-green-600 m-2 h-48">
      <div className="bg-slate-600 text-white  p-4 flex-1 text-center font-bold">
        <Left />
      </div>
      <div className="bg-orange-600 text-white  p-4 flex-1 text-center font-bold">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
