import { Helmet } from "react-helmet";
import Cv from "../../assets/Cv";
import Footer from "../../assets/Footer";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rajiul | About</title>
      </Helmet>
      <div className="bg-neutral p-4 min-h-screen">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              About .
            </h2>
            <p className="text-gray-300">
              Jr. Frontend Developer HTML-5 | Tailwind CSS | JavaScript | React  <br />| Mongodb |  Express js
              
            </p>
            <p className="text-gray-300">
              Complete six month training from{" "}
              <a
                className="underline text-success"
                href="https://web.programming-hero.com/home"
                target="_blank"
              >
                programming hero
              </a>
            </p>
            <p className="text-gray-300">
              Bsc in EEE _
              <a
                className="underline text-success"
                href="https://wub.edu.bd"
                target="_blank"
              >
                {" "}
                World University of Bangladesh
              </a>
              <Cv />
            </p>
          </div>
          <p className="text-gray-300 mt-5">
            <span className="text-3xl text-success">W</span>ith a deep-seated passion for web
            development, I thrive on transforming creative ideas into
            interactive and dynamic digital experiences. My journey in coding is
            fueled by a relentless curiosity and a drive to stay updated with
            the latest technologies. I take pride in crafting user-friendly
            interfaces and seamless user experiences, ensuring every project I
            work on is both visually appealing and functionally robust. Web
            development is not just a profession for me; it’s a canvas for
            innovation and creativity.
          </p>
          <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 10l2 -2v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="about-title">
                    Frontend Technology
                  </h5>
                  <p className="text-gray-300">
                    <p>1. Html</p>
                    <p>2. Javascript</p>
                    <p>3. React</p>
                    <p>4. Next Js</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="about-card group">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="about-title">
                    Backend Technology
                  </h5>
                  <p className="text-base-100">1. Node</p>
                  <p className="text-base-100">2. Express</p>
                  <p className="text-base-100">3. Mongodb</p>
                  <p className="text-base-100">4. Firebase authentication</p>
                </div>
              </div>
            </div>
            <div className="about-card group">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="about-title">
                    Cascading Style Sheets
                  </h5>
                  <p className="text-base-100">2. Tailwind</p>
                  <p className="text-base-100">3. Material Tailwind</p>
                  <p className="text-base-100">3. Daisyui</p>
                  <p className="text-base-100">3. Shadcn-Ui</p>
                </div>
              </div>
            </div>
            <div className="about-card group">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                  <path d="M14 8v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="about-title">
                    Npm package
                  </h5>
                  <p className="text-base-100">1. jwt</p>
                  <p className="text-base-100">2. Aos</p>
                  <p className="text-base-100">3. Node mailer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
