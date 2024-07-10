import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet } from "react-helmet";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cv from '../../assets/Cv';
import Footer from '../../assets/Footer';
AOS.init()
const Contact = () => {
  return (
<div>
<div className="hero bg-neutral h-screen text-base-100  ">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-3xl uppercase font-bold">Contact Information</h1>
          <Cv />
          <p className="py-6">
          Are you interested in collaborating on exciting web projects, or do you have any questions about our work? As an enthusiastic Junior Frontend Developer, I'm eager to connect with you! Please feel free to reach out for inquiries, project discussions, or just to say hello. Let’s ...
          </p>
          <div className="space-y-4">
            <label data-aos="fade-left" className="input text-neutral input-bordered flex items-center gap-2">
              <span className="font-semibold">Address</span> Khulna, Bangladeh
            </label>
            <label data-aos="fade-right" className="input text-neutral input-bordered flex items-center gap-2">
              <span className="font-semibold">Phone & WhatsApp</span> 
              :+8801986570093
            </label>
            <label data-aos="fade-left" className="input text-neutral input-bordered flex items-center gap-2">
              <span className="font-semibold">Email</span> 
              :rajiulrayhan@gmail.com
            </label>
            <div>
            <div className="mt-3 flex gap-5 items-center justify-center text-gray-600 text-sm md:text-sm">
             <Link to="https://www.linkedin.com/in/rajiul-islam-rayhan/" target="_blank"><FaLinkedin className="text-2xl text-base-100" /></Link> 
             <Link to="https://www.facebook.com/mohammad.rajiulislam" target="_blank"><FaFacebookF className="text-2xl text-base-100" /></Link> 
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

export default Contact;
