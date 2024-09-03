import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GlobalNotification from "../components/Notifications";

const Layout: React.FC = () => {
  return (
    <>
      <GlobalNotification />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
