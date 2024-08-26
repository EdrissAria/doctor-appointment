import { Route, Routes } from "react-router-dom";
import DoctorDetail from "./pages/DoctorDetail";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./layout";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="doctor/:id" element={<DoctorDetail />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
