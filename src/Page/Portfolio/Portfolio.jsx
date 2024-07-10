import { Helmet } from "react-helmet";
import Cv from "../../assets/Cv";
import Footer from "../../assets/Footer";
import PortfolioCard2 from "./PortfolioCard2";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "Library",
      serverLink: "https://github.com/rajiul93/library-server/",
      clientLink: "https://github.com/rajiul93/library/",
      liveLink: "https://libraryan.netlify.app",
      image: "https://i.ibb.co/jZDDncQ/library.jpg",
    },
    {
      id: 2,
      title: "Pet Campaign & Adoption",
      serverLink: "https://github.com/rajiul93/pet-adopt-server/",
      clientLink: "https://github.com/rajiul93/pet-adoption/",
      liveLink: "https://pet-adoption-go.netlify.app/",
      image: "https://i.ibb.co/dMH4NMH/pet.jpg",
    },
    {
      id: 3,
      title: "Art & craft",
      serverLink: "https://github.com/rajiul93/art-server",
      clientLink: "https://github.com/rajiul93/art",
      liveLink: "https://update-art.netlify.app/",
      image: "https://i.ibb.co/cxcCJd4/art.jpg",
    },
    {
      id: 4,
      title: "Next js App",
      serverLink: "https://github.com/rajiul93/new-agency",
      clientLink: "https://github.com/rajiul93/new-agency",
      liveLink: "https://new-agency-eight.vercel.app/",
      image: "https://i.ibb.co/p1jqrJp/nexjs.jpg",
    },
    {
      id: 4,
      title: "Car doctor ",
      serverLink: "https://github.com/rajiul93/new-agency",
      clientLink: "https://github.com/rajiul93/new-agency",
      liveLink: "https://new-agency-eight.vercel.app/",
      image: "https://i.ibb.co/Bc2Lv8B/car.jpg",
    },

  ];

  return (
    <div className="space-y-4 pt-10 bg-neutral px-6 ">
      <Helmet>
        <meta charSet="utf-8" name="react js"  content="junior react developer"/>
        <title>Portfolio</title>
      </Helmet>
      <div className="flex justify-between  ">
      <h1 className="text-base-200 italic text-xl">My Projects</h1>
        <div className="mr-5"><Cv /></div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {data.map((item, index) => (
       <PortfolioCard2 key={index} item={item} />
      ))}
    </div>
      <Footer/>

    </div>
  );
};

export default Portfolio;
