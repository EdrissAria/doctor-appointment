import { Link, Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <h1>this is the footer</h1>
      </footer>
    </>
  );
};

export default Layout;
