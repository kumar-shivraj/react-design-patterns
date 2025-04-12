// import ScreenSplitter from "./components/layouts/ScreenSplitter";
// import CurrentUserLoader from "./components/container/CurrentUserLoader.jsx";
import axios from "axios";
import UserInfo from "./components/container/UserInfo.jsx";
import DataSource from "./components/container/DataSource.jsx";
// import BookInfo from "./components/container/BookInfo.jsx";
// import UserLoader from "./components/container/UserLoader.jsx";
// import ResourceLoader from "./components/container/ResourceLoader.jsx";
function App() {
  const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
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

      {/* <ResourceLoader
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
      </ResourceLoader> */}

      <DataSource
        getData={() => getDataFromServer("http://localhost:9090/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
