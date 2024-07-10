import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from '../../assets/Footer';
AOS.init()
// ..
const Blog = () => {
  return (
    <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <div className="flex flex-col p-5 lg:px-48 lg:py-11 bg-neutral">
        <div className="bg-gray-100 p-5 mb-10" data-aos="zoom-in-up">
          <h1 className="font-bold text-2xl mb-2">State Manage: Context API</h1>
          <p className="my-3">
            The Context API is a powerful feature in React that allows for
            efficient state management across the application. It enables the
            sharing of data without having to pass props down manually at every
            level, making it easier to manage global state and improving the
            overall structure of the app.
          </p>
          <Link
            to="https://docs.google.com/document/d/1fZZ9F7KJ-7iQouXarccIeuyXvnfIlMjjeBzn1yqAsyU/edit?usp=sharing"
            target="_blank"
            className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded"
          >
            Read More...
          </Link>
        </div>
        <div className="bg-gray-100 p-5 mb-10" data-aos="zoom-out-up">
          <h1 className="font-bold text-2xl mb-2">useRef </h1>
          <p className="my-3">
            The useRef Hook in React is used to persist values between renders
            without causing a re-render. It is commonly used to access and
            manipulate DOM elements directly, manage focus, and store mutable
            values that do not cause re-rendering when updated. This makes
            useRef a powerful tool for handling side effects and optimizing
            performance in your React components.
          </p>
          <Link
            to="https://docs.google.com/document/d/18kjXa9T_qW_ThXnUqAHf1fFtLfA6mZo5EUXzNgm5Gdk/edit?usp=sharing"
            target="_blank"
            className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded"
          >
            Read More...
          </Link>
        </div>
        <div className="bg-gray-100 p-5 mb-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
          <h1 className="font-bold text-2xl mb-2">Date Manage </h1>
          <p className="my-3">
            Managing dates in JavaScript is streamlined with the built-in Date
            object, which allows for easy creation, manipulation, and formatting
            of dates and times. JavaScript provides various methods for date
            arithmetic, parsing date strings, and converting dates to various
            formats. Additionally, libraries like Moment.js and date-fns offer
            enhanced functionality and more intuitive APIs for complex date
            operations.
          </p>
          <Link
            to="https://docs.google.com/document/d/1emqhs_SVf8FT8dlzGR4rC93euS9Q_ZWhwDanAjKUY3E/edit?usp=sharing"
            target="_blank"
            className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded"
          >
            Read More...
          </Link>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Blog;
