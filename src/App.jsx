// import ScreenSplitter from "./components/layouts/ScreenSplitter";
import CurrentUserLoader from "./components/container/CurrentUserLoader.jsx";
import UserInfo from "./components/container/UserInfo.jsx";
function App() {
  return (
    <>
      {/* <ScreenSplitter /> */}
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
