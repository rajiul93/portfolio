import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PortfolioCard = ({ img, title, serverLink, clientLink, liveLink }) => {
  console.log(serverLink);

  return (
    <section className="group container mx-auto max-w-4xl  antialiased ">
      <article className=" md:max-h-[400px] overflow-hidden flex flex-col md:flex-row  shadow-lg  group   transform duration-500 hover:-translate-y-1">
        <img
          className="w-96 md:w-1/2 h-48 md:h-full object-cover duration-1000 ease-in-out  md:group-hover:-translate-y-2/4"
          src={img}
          alt=""
        />
        <div className="">
          <div className="px-5 pb-10">
            <h1 className="text-2xl font-semibold text-base-100  ">{title}</h1>
            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              Located in Rajshahi Division, Bogra is one of the oldest and most
              fascinating towns in Bangladesh
            </p>
          </div>
          <div className="bg-accent-content p-5 h-56">
            <div className="sm:flex flex-col md:flex-row items-start sm:justify-between">
              <div className="space-y-4">
                <div className="text-lg text-base-100">
                  <span className="text-base-300 font-bold">Git </span>{" "}
                  repository
                </div>
                <div className="  ">
           <div className="flex gap-2">
           <a
                    href={serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-base-100 border px-2 cursor-pointer rounded-full"
                  >
                    Server Side link
                  </a>
                  
                  <a
                    href={clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-100  border px-2 cursor-pointer rounded-full   text-sm md:text-base mt-1"
                  >
                    Client Side link
                  </a>
           </div>
 
<br />
                  <Link
                    to={liveLink}
                    target="_blank"
                    className=" bg-base-100 mt-3 rounded-full px-4"
                  >
                    Live link
                  </Link>
                </div>
                <div></div>
              </div>
            </div>

            <div className="mt-3 flex gap-3 items-center text-gray-600 text-sm md:text-sm">
              <Link to="https://github.com/rajiul93" target="_blank">
                <FaGithub className="text-2xl text-base-100" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/rajiul-islam-rayhan/"
                target="_blank"
              >
                <FaLinkedin className="text-2xl text-base-100" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PortfolioCard;
