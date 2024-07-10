 

const Cv = () => {
    return (
      <div className="my-4">
          <a
        href="resume.pdf"
        target="_blank"
        download
        className="border hover:border-neutral px-2 md:px-4 py-1 md:py-2 rounded-2xl hover:bg-gray-950 text-base-100  duration-500"
      >
        Download Resume
      </a>
      </div>
    );
};

export default Cv;