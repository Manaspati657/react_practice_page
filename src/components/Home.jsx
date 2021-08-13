import Common from "./Common";
import web from '../image/rocket1.png';


const Home = () => {
  return (
    <>
      <Common 
      name="Grow your bussiness with" 
      visit="/service" 
      btnName="Get Started" 
      imgSrc={web}
      />
    </>
  );
};

export default Home;
