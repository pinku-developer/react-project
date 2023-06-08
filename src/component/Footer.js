import React from "react";
import logo from "../image/logo.png";
import facebookicon from "../image/facebookicon.svg";
import twittericon from "../image/twittericon.svg";
import linkedin from "../image/linkedin.svg";
import youtube from "../image/youtube.svg";
import micon from "../image/micon.svg";
import picon from "../image/picon.svg";

function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className=" d-flex wrapp-box ">
                <input
                  type="text"
                  placeholder="Enter Your Email Here "
                  className="inputbox"
                />
                <button className="btn btn-custom  text-white">
                  Subscribe To Newsletter
                </button>
              </div>
              <p className="text-white signuptext">
                Signup and start enjoying the benifits today!
              </p>
              <button className="Investing-now btn text-white">
                Sign Up To Lilypads
              </button>

              <div className="social-icon">
                <div>
                  <ul className="d-flex social-list p-0">
                    <li>
                      <div className="social-img">
                        <img src={facebookicon} className="" />
                      </div>
                    </li>
                    <li>
                      <div className="social-img">
                        <img src={twittericon} className="" />
                      </div>
                    </li>

                    <li>
                      <div className="social-img">
                        <img src={linkedin} className="" />
                      </div>
                    </li>

                    <li>
                      <div className="social-img">
                        <img src={youtube} className="" />
                      </div>
                    </li>

                    <li>
                      <div className="social-img">
                        <img src={micon} className="" />
                      </div>
                    </li>
                    <li>
                      <div className="social-img">
                        <img src={picon} className="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="marginbottom">
                    <img src={logo} className="w-100" />
                  </div>
                  <div className="margintop">
                    <p className="text-white">Network</p>
                    <ul className="network">
                      <li>Community</li>
                      <li>Investor</li>
                      <li>Broker</li>
                    </ul>
                  </div>
                  <div className="Technologymargin">
                    <p className="text-white">Technology</p>
                    <ul className="network">
                      <li>Artificial Intelligence</li>
                      <li>Block Chain</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" marginbottom">
                    <p className="text-white">Reach Us At</p>
                    <p className="address">
                      6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-white">Product</p>
                    <ul className="network">
                      <li>Invest</li>
                      <li>Discover</li>
                      <li>Transact</li>
                      <li>Manage</li>
                    </ul>
                  </div>
                  <div className="Highlightsmargin">
                    <p className="text-white">Highlights</p>

                    <p className="address">
                      Impact of COVID-19 on the food and beverage industry and
                      the retail sector
                    </p>
                    <p className="address">
                      Commercial lending during COVID-19: navigating the impact
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className=" marginbottom extramargin">
                    {/* <p className="text-white">Reach Us At</p>
                    <p className="address">
                      6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
                    </p> */}
                  </div>
                  <div className="mt-4">
                    <p className="text-white">Our Story</p>
                    <ul className="network">
                      <li>Approach</li>
                      <li>AboutUs</li>
                    </ul>
                  </div>
                  <div className="Knowledgemargin">
                    <p className="text-white">Knowledge Center</p>

                    <ul className="network">
                      <li>Resource</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
