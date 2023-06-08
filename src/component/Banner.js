import React from "react";
import Navbar from "../component/Navbar";
import mobile from "../image/mobile.png";
// import logo from "logo.png";

function Banner() {
  return (
    <div>
      <div className="position-relative">
        <Navbar />
        <div className="row m-0 ">
          <div className="col-md-8 p-0 m-0">
            <div className="welcomeToThe">
              <p className="welcome-text">
                <span className="arrow"></span>Welcome To The
              </p>
              <h2 className="Unprecedented">
                Unprecedented Era of{" "}
                <span className="realState">Real Estate Investing </span>
              </h2>
              <p className="Lilypads">
                Lilypads uses sophisticated technologies for data-driven
                decisions in investing, managing and funding commercial real
                estate assets
              </p>
              <button className="Investing-now btn text-white">
                Start Investing Now &nbsp;
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>

            <div className="counter">
              <div className="count-space">
                <h2>
                  <span className="count-number">658+</span>
                </h2>
                <p>Properties Registered</p>
              </div>
              <div className="count-space">
                <h2>
                  <span className="count-number">658+</span>
                </h2>
                <p>Deals Cracked</p>
              </div>
              <div className="count-space">
                <h2>
                  <span className="count-number">255+</span>
                </h2>
                <p>Investors</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-0 p-0">
            <div className="second-bg">
              <img src={mobile} className="w-100 mobile-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
