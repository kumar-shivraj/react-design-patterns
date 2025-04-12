// import ScreenSplitter from "./components/layouts/ScreenSplitter";
// import CurrentUserLoader from "./components/container/CurrentUserLoader.jsx";
import UserInfo from "./components/container/UserInfo.jsx";
import BookInfo from "./components/container/BookInfo.jsx";
// import UserLoader from "./components/container/UserLoader.jsx";
import ResourceLoader from "./components/container/ResourceLoader.jsx";
function App() {
  return (
    <>
      {/* <ScreenSplitter /> */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}

      <ResourceLoader
        resourceUrl={"http://localhost:9090/users/2"}
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl={"http://localhost:9090/users/1"}
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl={"http://localhost:9090/books/1"}
        resourceName={"book"}
      >
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
