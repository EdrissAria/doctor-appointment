import AboutHospitalSection from "../components/home_sections/AboutSection";
import BlogSection from "../components/home_sections/BlogSection";
import MeetDoctorsSection from "../components/home_sections/DoctorsSection";
import HealthCareSection from "../components/home_sections/HealthCareSection";
import HospitalServiceSection from "../components/home_sections/HospitalServiceSection";

const Home: React.FC = () => {
    return (
      <>
        <HealthCareSection />
        <AboutHospitalSection />
        <HospitalServiceSection />
        <MeetDoctorsSection />
        <BlogSection />
      </>
    );
  };
  
  export default Home;
  