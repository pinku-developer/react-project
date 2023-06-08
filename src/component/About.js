import React from "react";
import icon from "../image/icon.png";
import manicon from "../image/manicon.png";
import manager from "../image/manager.png";
import optimize from "../image/optimize.png";
import subscribe from "../image/subscribe.png";
function About() {
  return (
    <div>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pr-0">
              <div className="box-1">
                <p className="welcome-text">
                  <span className="arrow"></span>About Us
                </p>
                <h4>
                  Lillypad is the only Real Estate Investment tool you need for
                  your business
                </h4>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="box-2 bordertop">
                <div className="d-flex Data-Driven">
                  <div className="img-box">
                    <img src={icon}></img>
                  </div>
                  <p>Become a Data-Driven Investor</p>
                </div>
                <p>
                  Lilypads is the cloud-based real estate investment platform
                  that helps you make data-driven investment decisions and
                  assists with reaching your long term investment objectives.
                </p>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="box-2 bordertop borderright">
                <div className="d-flex Data-Driven">
                  <div className="img-box">
                    <img src={manicon}></img>
                  </div>
                  <p>Become a Data-Driven Investor</p>
                </div>
                <p>
                  Streamline your investment evaluation process and collaborate
                  in reaching your long term investment objectives
                </p>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="box-2 bordershadow">
                <div className="d-flex Data-Driven">
                  <div className="img-box">
                    <img src={manager}></img>
                  </div>
                  <p>Manager Due Diligence</p>
                </div>
                <p>
                  Evaluate managers against your objectives using traditional
                  risk metrics with the addition of factor analysis. All it
                  takes is a set of returns
                </p>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="box-2 borderfulltop">
                <div className="d-flex Data-Driven">
                  <div className="img-box">
                    <img src={optimize}></img>
                  </div>
                  <p>Optimize Asset Allocation</p>
                </div>
                <p>
                  Understand the underlying risk drivers in your portfolio using
                  the Lilypads analysis factors and then optimize that portfolio
                  based on objectives
                </p>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="box-2 borderright borderline">
                <div className="d-flex Data-Driven">
                  <div className="img-box">
                    <img src={subscribe}></img>
                  </div>
                  <p>Our Subscribers</p>
                </div>
                <p>
                  Serving a constellation of global subscribers Pension funds,
                  Funds of Funds, Banks, Family offices, Asset managers, Wealth
                  Managers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
