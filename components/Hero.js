import Image from "next/image";
import iphoneImg from "../assets/banner-thumb.png";
import { FaPlayCircle } from "react-icons/fa";

import paypal from "../assets/sponsor/paypal.svg";
import google from "../assets/sponsor/google.svg";
import dropbox from "../assets/sponsor/dropbox.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container-sm">
        <div className="row align-items-center">
          {/* text content column */}
          <div className="col col-md-7">
            <h1 className="lh-sm">
              Experience your ultimate mobile application
            </h1>

            <p className="lh-lg mt-4">
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>

            <div className="mt-5">
              <button
                type="button"
                className="btn btn-light rounded-pill fw-custom px-3 py-2 custom-shadow-hover"
              >
                Get Started
              </button>

              <button
                type="button"
                className="btn btn-link text-light text-decoration-none fw-custom ms-2"
              >
                <FaPlayCircle className="fs-4 me-2" /> Watch Video
              </button>
            </div>

            <div className="mt-4 d-flex flex-column flex-md-row align-items-md-center">
              <h6 className="text-secondary-2 m-0 fw-custom ">Sponsored by:</h6>

              <div
                className="mt-3 mt-md-0 d-flex align-items-center flex-grow-1 ms-lg-2"
                id="sponsors"
              >
                <Image src={paypal} />
                <Image src={google} />
                <Image src={dropbox} />
              </div>
            </div>
          </div>
          {/* text content column */}

          {/* iphone column */}
          <div className="d-none d-md-block col" id="iphone">
            <img src="./banner-thumb.png" alt="banner" />
          </div>
          {/* iphone column */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
