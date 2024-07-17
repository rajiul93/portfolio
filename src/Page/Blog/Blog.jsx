import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet";
import Footer from "../../assets/Footer";
import ReadMore from "../../component/ReadMore";
AOS.init();
// ..
const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Junior React Developer with skills in HTML, CSS, JavaScript, and more."
        />

        <title>Blog</title>
      </Helmet>
      <div className="  p-5 md:p-16 space-y-6  min-h-screen">
        <div
          className="bg-slate-800 text-base-300  p-5   "
          data-aos="zoom-in-up"
        >
          <h1 className="font-bold text-2xl ">State Manage: Context API</h1>
          <article className="my-4 ">
            The Context API is a powerful feature in React that allows for
            efficient state management across the application. It enables the
            sharing of data without having to pass props down manually at every
            level, making it easier to manage global state and improving the
            overall structure of the app.
          </article>
          <a
            href="https://docs.google.com/document/d/1fZZ9F7KJ-7iQouXarccIeuyXvnfIlMjjeBzn1yqAsyU/edit?usp=sharing"
            target="_blank"
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
          >
            <ReadMore />
          </a>
        </div>
        <div
          className="bg-slate-800 text-base-300  p-5 "
          data-aos="zoom-out-up"
        >
          <h1 className="font-bold text-2xl ">useRef </h1>
          <article className="my-4">
            The useRef Hook in React is used to persist values between renders
            without causing a re-render. It is commonly used to access and
            manipulate DOM elements directly, manage focus, and store mutable
            values that do not cause re-rendering when updated. This makes
            useRef a powerful tool for handling side effects and optimizing
            performance in your React components.
          </article>
          <a
            to="https://docs.google.com/document/d/18kjXa9T_qW_ThXnUqAHf1fFtLfA6mZo5EUXzNgm5Gdk/edit?usp=sharing"
            target="_blank"
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
          >
            <ReadMore />
          </a>
        </div>
        <div
          className="bg-slate-800 text-base-300  p-5 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="font-bold text-2xl mb-2">Date Manage </h1>
          <article className="my-4">
            Managing dates in JavaScript is streamlined with the built-in Date
            object, which allows for easy creation, manipulation, and formatting
            of dates and times. JavaScript provides various methods for date
            arithmetic, parsing date strings, and converting dates to various
            formats. Additionally, libraries like Moment.js and date-fns offer
            enhanced functionality and more intuitive APIs for complex date
            operations.
          </article>
          <a
            to="https://docs.google.com/document/d/1emqhs_SVf8FT8dlzGR4rC93euS9Q_ZWhwDanAjKUY3E/edit?usp=sharing"
            target="_blank"
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
          >
            <ReadMore />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
