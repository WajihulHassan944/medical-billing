import DoctorList from "./DoctorCard/DoctorList";
import DoctorProfile from "./DoctorProfile/DoctorProfile";
import TeamSection from "./TeamSection/TeamSection";



export default function doctor() {
  return (
    <div style={{backgroundColor: '#fcfcfc'}}>
      <TeamSection />
      <DoctorProfile/>
      <DoctorList/>
    </div>
  );
}
