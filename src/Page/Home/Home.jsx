import { Helmet } from "react-helmet";
import Footer from "../../assets/Footer";
import Profile from "./Profile ";

const Home = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" name="description" content="Junior React Developer with skills in HTML, CSS, JavaScript, and more."/>

        <title>Profile</title>
      </Helmet>
      <div>
        <Profile />
      </div>
      <Footer/>

    </div>
  );
};

export default Home;
