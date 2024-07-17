import { Suspense, useState } from "react";
import rajiul from "../../assets/rajiul.jpg"; // Use WebP format for optimized image
import Resume from "../../component/Resume";
import Name from "./Name";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div
      id="container"
      className=" w-auto bg-neutral min-h-screen flex  justify-center relative"
    >
      <div
        id="container"
        className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative items-center gap-10"
      >
        <div className="about-card">
          {loading && (
            <div className="skeleton rounded-lg min-w-[100px] lg:max-w-[300px] w-full h-auto md:w-auto md:h-auto"></div>
          )}
          <img
            className="rounded-lg min-w-[100px] lg:max-w-[300px] w-full h-auto md:w-auto md:h-auto"
            src={rajiul}
            width="300"
            height="200"
            onLoad={handleImageLoad}
            alt="image of myself"
            loading="lazy" // Lazy loading for the image
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <div>
            <h1 className="text-white font-bold text-3xl mt-6 mb-8 ">
              Hey, its me <Name />
            </h1>
            <Suspense fallback={<div>Loading Resume...</div>}>
              <Resume />
            </Suspense>
            <p className="text-white w-full mt-5 mb-10">
              <span className="text-2xl italic text-success">A</span>s a
              front-end developer, I create user interfaces using HTML, CSS,
              JavaScript, and React-JS to ensure seamless and engaging web
              experiences.
            </p>
            <div
              id="social"
              className="flex flex-col md:flex-row justify-start items-center gap-4"
            >
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/rajiul93"
                className="btn-portfolio"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                  width="20px"
                  height="20px"
                  alt="Github"
                  loading="lazy" // Lazy loading for the image
                />
                <span className="text-[12px]">Visit my Github</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/rajiul-islam-rayhan/"
                className="btn-portfolio"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                  width="20px"
                  height="20px"
                  alt="LinkedIn"
                  loading="lazy" // Lazy loading for the image
                />
                <span className="text-[12px]">Visit my LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
