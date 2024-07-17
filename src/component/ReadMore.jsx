const ReadMore = () => {
  return (
    <>
      <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-gray-600 border-2 border-black duration-300 group-hover:bg-black"></span>
      <span className="relative  text-base-300 group-hover:text-white">
        Read more...
      </span>
    </>
  );
};

export default ReadMore;
