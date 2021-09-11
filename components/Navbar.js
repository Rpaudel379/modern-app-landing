import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";

const Navbar = () => {
  const [navLock, setNavLock] = useState(false);

  const navRef = useRef(null);

  const scrollFunc = () => {
    const navHeight = navRef.current.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;

    if (scrollHeight > navHeight) {
      setNavLock(true);
    } else {
      setNavLock(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg  fixed-top pt-3 nav ${
        navLock ? "bg-white navbar-light" : "bg-transparent navbar-dark"
      }`}
      ref={navRef}
    >
      <div className="container-sm">
        {/* logo */}
        <a href="#" className="navbar-brand ">
          <Image src={navLock ? logoDark : logo} alt="logo" className="logo" />
        </a>
        {/* end of logo */}
        {/* canvas */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* navbar items */}
          <div className="offcanvas-body ps-5 ps-lg-0 d-flex flex-column flex-lg-row">
            {/* navbar links */}
            <ul
              className={`navbar-nav justify-content-lg-center flex-grow-1 fs-5 ${
                navLock ? "text-dark" : "text-light"
              }`}
            >
              <li className="nav-item">
                <a
                  className={`nav-link active ${
                    navLock ? "text-dark" : "text-light"
                  }`}
                  aria-current="true"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    navLock ? "text-dark" : "text-grey-3"
                  }`}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    navLock ? "text-dark" : "text-grey-3"
                  }`}
                  href="#testimonial"
                >
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    navLock ? "text-dark" : "text-grey-3"
                  }`}
                  href="#payment"
                >
                  Pricing
                </a>
              </li>
            </ul>

            {/* end of navbar links */}
          </div>
          {/* end of navbar items */}
        </div>

        <div>
          <button
            className={`btn  rounded-pill px-sm-3 py-sm-2 ${
              navLock ? "btn-outline-blue" : "btn-outline-light"
            }`}
          >
            Get Started
          </button>
          {/* toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* end of toggler */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
