 

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral  flex flex-col flex-col-reverse text-neutral-content items-center ">
              <aside className="grid-flow-col items-center text-center">
                <p>
                  Copyright © ${new Date().getFullYear()} - All right reserved
                </p>
              </aside>

            
              <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div
                  id="social"
                  className="flex f justify-start items-center gap-2"
                >
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/rajiul93"
                    className="bg-gray-800 rounded-lg   flex items-center gap-2 text-white"
                  >
                    <img
                      className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                      src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                      width="20px"
                      height="20px"
                      alt="Github"
                    />
                  </a>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.linkedin.com/in/rajiul-islam-rayhan/"
                    className="bg-gray-800 rounded-lg   flex items-center gap-2 text-white"
                  >
                    <img
                      className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                      src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                      width="20px"
                      height="20px"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </nav>
              
            </footer>
        </div>
    );
};

export default Footer;
