import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Footer = () => {
  return (
    <div className="mt-5">
      {/* Footer */}
      <footer className="text-center text-white bg-dark">
        {/* Grid container */}
        <div className="container">
          {/* Section: Links */}
          <section className="mt-5">
            {/* Grid row*/}
            <div className="row text-center d-flex justify-content-center pt-5">
              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">About us</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">Products</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">Awards</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">Help</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">Contact</Link>
                </h6>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </section>
          {/* Section: Links */}

          <hr className="my-5" />

          {/* Section: Text */}
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, 
                  commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>
          {/* Section: Text */}

          {/* Section: Social */}
          <section className="text-center mb-5">
            <Link to="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </Link>
          </section>
          {/* Section: Social */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright: 
          <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
