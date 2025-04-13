// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Products from "./views/products/Products";
// import AddProduct from "./views/products/AddProduct";
// import EditProduct from "./views/products/EditProduct";
// import DeleteProduct from "./views/products/DeleteProduct";
// import ViewProduct from "./views/products/ViewProduct";

// import UnControlledForm from "./components/controlled-uncontrolled/unControlled/UnControlledForm";
import ControlledForm from "./components/controlled-uncontrolled/controlled/ControlledForm";

// import Login from "./views/auth/Login";
// import Register from "./views/auth/Register";
// import ForgotPassword from "./views/auth/ForgotPassword";
// import ResetPassword from "./views/auth/ResetPassword";

// import UsersList from "./views/users/UsersList";
// import AddUser from "./views/users/AddUser";
// import EditUser from "./views/users/EditUser";
// import ViewUser from "./views/users/ViewUser";
// import UserSettings from "./views/users/UserSettings";

// import Dashboard from "./views/dashboard/Dashboard";
// import SummaryCards from "./views/dashboard/SummaryCards";
// import AnalyticsCharts from "./views/dashboard/AnalyticsCharts";

// import OrdersList from "./views/orders/OrdersList";
// import ViewOrder from "./views/orders/ViewOrder";
// import UpdateOrderStatus from "./views/orders/UpdateOrderStatus";

// import ProfileSettings from "./views/settings/ProfileSettings";

// import NotificationsList from "./views/notifications/NotificationsList";
// import NotificationSettings from "./views/settings/NotificationSettings";

// import AppPreferences from "./views/settings/AppPreferences";

// import ReportsDashboard from "./views/reports/ReportsDashboard";
// import SalesReport from "./views/reports/SalesReport";
// import TrafficAnalytics from "./views/reports/TrafficAnalytics";

// import NotFound from "./views/error/NotFound";
// import ServerError from "./views/error/ServerError";

// import ScreenSplitter from "./components/layouts/ScreenSplitter";
// import CurrentUserLoader from "./components/container/CurrentUserLoader.jsx";
// import axios from "axios";
// import UserInfo from "./components/container/UserInfo.jsx";
// import DataSource from "./components/container/DataSource.jsx";
// import DataSourceWithRender from "./components/container/DataSourceWithRender.jsx";
// import BookInfo from "./components/container/BookInfo.jsx";
// import UserLoader from "./components/container/UserLoader.jsx";
// import ResourceLoader from "./components/container/ResourceLoader.jsx";

// const getDataFromServer = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };

// const getDataFromLocalStorage = (key) => () => {
//   return localStorage.getItem(key);
// };

// eslint-disable-next-line react/prop-types
// const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  // return (
  //   <>
  //     {/* <ScreenSplitter /> */}
  //     {/* <CurrentUserLoader>
  //       <UserInfo />
  //     </CurrentUserLoader> */}
  //     {/* <UserLoader userId={1}>
  //       <UserInfo />
  //     </UserLoader>
  //     <UserLoader userId={2}>
  //       <UserInfo />
  //     </UserLoader>
  //     <UserLoader userId={3}>
  //       <UserInfo />
  //     </UserLoader> */}
  //     {/* <ResourceLoader
  //       resourceUrl={"http://localhost:9090/users/2"}
  //       resourceName={"user"}
  //     >
  //       <UserInfo />
  //     </ResourceLoader>
  //     <ResourceLoader
  //       resourceUrl={"http://localhost:9090/users/1"}
  //       resourceName={"user"}
  //     >
  //       <UserInfo />
  //     </ResourceLoader>
  //     <ResourceLoader
  //       resourceUrl={"http://localhost:9090/books/1"}
  //       resourceName={"book"}
  //     >
  //       <BookInfo />
  //     </ResourceLoader> */}
  //     {/* <DataSource
  //       getData={() => getDataFromServer("http://localhost:9090/users/2")}
  //       resourceName={"user"}
  //     >
  //       <UserInfo />
  //     </DataSource> */}
  //     {/* <DataSourceWithRender
  //       getData={() => getDataFromServer("http://localhost:9090/users/2")}
  //       render={(resource) => <UserInfo user={resource} />}
  //     ></DataSourceWithRender> */}
  //     {/* <DataSource
  //       getData={() => getDataFromLocalStorage("test")}
  //       resourceName={"msg"}
  //     >
  //       <Message />
  //     </DataSource> */}
  //     {/* <DataSource
  //       getData={() => getDataFromLocalStorage("test")}
  //       resourceName={"msg"}
  //     >
  //       <Message />
  //     </DataSource> */}
  //   </>
  // );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/products">
  //         <Route index element={<Products />} />
  //         <Route path="add" element={<AddProduct />} />
  //         <Route path=":id/edit" element={<EditProduct />} />
  //         <Route path=":id/delete" element={<DeleteProduct />} />
  //         <Route path=":id" element={<ViewProduct />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {/* Products */}
  //       <Route path="/products">
  //         <Route index element={<Products />} />
  //         <Route path="add" element={<AddProduct />} />
  //         <Route path=":id/edit" element={<EditProduct />} />
  //         <Route path=":id/delete" element={<DeleteProduct />} />
  //         <Route path=":id" element={<ViewProduct />} />
  //       </Route>
  //       <Route path="/auth">
  //         <Route path="login" element={<Login />} />
  //         <Route path="register" element={<Register />} />
  //         <Route path="forgot-password" element={<ForgotPassword />} />
  //         <Route path="reset-password" element={<ResetPassword />} />
  //       </Route>
  //       {/* Users */}
  //       <Route path="/users">
  //         <Route index element={<UsersList />} />
  //         <Route path="add" element={<AddUser />} />
  //         <Route path=":id/edit" element={<EditUser />} />
  //         <Route path=":id" element={<ViewUser />} />
  //         <Route path="settings" element={<UserSettings />} />
  //       </Route>
  //       <Route path="/dashboard">
  //         <Route index element={<Dashboard />} />
  //         <Route path="summary" element={<SummaryCards />} />
  //         <Route path="analytics" element={<AnalyticsCharts />} />
  //       </Route>
  //       {/* Orders */}
  //       <Route path="/orders">
  //         <Route index element={<OrdersList />} />
  //         <Route path=":id" element={<ViewOrder />} />
  //         <Route path=":id/update" element={<UpdateOrderStatus />} />
  //       </Route>
  //       {/* Settings */}
  //       <Route path="/settings">
  //         <Route index element={<ProfileSettings />} />
  //         <Route path="profile" element={<ProfileSettings />} />
  //         <Route path="notifications" element={<NotificationSettings />} />
  //         <Route path="preferences" element={<AppPreferences />} />
  //       </Route>
  //       {/* Notifications */}
  //       <Route path="/notifications">
  //         <Route index element={<NotificationsList />} />
  //         <Route path="settings" element={<NotificationSettings />} />
  //       </Route>
  //       {/* Reports */}
  //       <Route path="/reports">
  //         <Route index element={<ReportsDashboard />} />
  //         <Route path="sales" element={<SalesReport />} />
  //         <Route path="traffic" element={<TrafficAnalytics />} />
  //       </Route>
  //       {/* Error Routes */}
  //       <Route path="/500" element={<ServerError />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <>
      {/* <UnControlledForm /> */}
      <ControlledForm />
    </>
  );
}

export default App;
