import { Helmet } from "react-helmet";
import Footer from "../../assets/Footer";
import Profile from "./Profile ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
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
