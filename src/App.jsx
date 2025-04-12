// import ScreenSplitter from "./components/layouts/ScreenSplitter";
// import CurrentUserLoader from "./components/container/CurrentUserLoader.jsx";
import UserInfo from "./components/container/UserInfo.jsx";
import UserLoader from "./components/container/UserLoader.jsx";
function App() {
  return (
    <>
      {/* <ScreenSplitter /> */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
