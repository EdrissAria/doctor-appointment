import { Link, Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>this is the header</h1>
      </header>
      <Outlet />
      <footer>
        <h1>this is the footer</h1>
      </footer>
    </>
  );
};

export default Layout;
