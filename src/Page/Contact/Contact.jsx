import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../assets/Footer";
import Resume from "../../component/Resume";
AOS.init();
const Contact = () => {
  return (
    <div>
      <div className="hero bg-neutral h-screen text-base-100  ">
        <Helmet>
        <meta charSet="utf-8" name="description" content="Junior React Developer with skills in HTML, CSS, JavaScript, and more."/>


          <title>Contact</title>
        </Helmet>
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl uppercase font-bold mb-6">
              Contact Information
            </h1>
            <Suspense fallback={<div>Loading Resume...</div>}>
            <Resume />
          </Suspense>
            <p className="py-6">
              Are you interested in collaborating on exciting web projects, or
              do you have any questions about our work? As an enthusiastic
              Junior Frontend Developer, I am eager to connect with you! Please
              feel free to reach out for inquiries, project discussions, or just
              to say hello. Let’s ...
            </p>
            <div className="space-y-4">
              <label
                data-aos="fade-left"
                className="input text-base bg-base-content input-bordered flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className=""
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                <span className="font-semibold">Address</span> Khulna, Bangladeh
              </label>
              <label
                data-aos="fade-right"
                className="input text-base bg-base-content input-bordered flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M7.18848 2.51372C6.28217 1.60741 4.81275 1.60741 3.90644 2.51372C2.03119 4.38896 2.03119 7.42934 3.90644 9.30459L11.3627 16.7609C13.238 18.6361 16.2784 18.6361 18.1536 16.7609C19.0599 15.8546 19.0599 14.3852 18.1536 13.4788L16.0824 11.4077C15.351 10.6763 14.1653 10.6763 13.4339 11.4077C13.2233 11.6183 12.8817 11.6183 12.671 11.4077L8.91853 7.65514C8.70787 7.44448 8.70787 7.10293 8.91853 6.89227C9.64989 6.1609 9.64989 4.97513 8.91853 4.24377L7.18848 2.51372Z"
                    fill="#065F46"
                  />
                </svg>
                <span className="font-semibold">Phone & WhatsApp</span>
                :+8801986570093
              </label>
              <label
                data-aos="fade-left"
                className="input text-base bg-base-content input-bordered flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M0.980369 2.24792C1.71093 1.28666 2.86648 0.666016 4.16699 0.666016H12.5003C13.7782 0.666016 14.9162 1.26527 15.6485 2.19809C15.6369 2.2106 15.6257 2.22364 15.615 2.23721L14.8684 3.18004L13.1551 5.20653C12.1329 6.41561 11.7452 6.85169 11.2425 7.08496C10.7399 7.31822 10.1565 7.33272 8.57326 7.33273H8.09451C6.51086 7.33271 5.92743 7.31822 5.42467 7.08486C4.92191 6.8515 4.53424 6.41525 3.51199 5.20572L1.80012 3.18021L1.79155 3.17028L0.980369 2.24792Z"
                    fill="#065F46"
                  />
                  <path
                    d="M0.331033 3.52856C0.224291 3.88909 0.166992 4.27086 0.166992 4.66602V11.3327C0.166992 13.5418 1.95785 15.3327 4.16699 15.3327H12.5003C14.7095 15.3327 16.5003 13.5418 16.5003 11.3327V4.66602C16.5003 4.25643 16.4388 3.86122 16.3244 3.48914L15.9071 4.01614C15.9027 4.02173 15.8981 4.02725 15.8935 4.0327L14.0746 6.18411C13.1883 7.23323 12.6064 7.92194 11.8038 8.29441C11.0011 8.66689 10.0995 8.66657 8.7261 8.6661L7.94163 8.6661C6.56792 8.66657 5.66611 8.66688 4.86332 8.29426C4.06053 7.92164 3.47866 7.23268 2.5923 6.18317L0.786009 4.04589L0.331033 3.52856Z"
                    fill="#065F46"
                  />
                </svg>
                <span className="font-semibold">Email</span>
                :rajiulrayhan@gmail.com
              </label>
        
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
