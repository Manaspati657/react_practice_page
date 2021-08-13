import Common from "./Common";
import web from '../image/service.png';

const About = () => {
  return (
    <>
      <Common name="Welcome to About page" visit="/contact" btnName="Contact Now" imgSrc={web}/>
    </>
  );
};

export default About;
