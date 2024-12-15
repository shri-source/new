import React from "react";
import "../Style/About.css";
import image from "../assets/aboutAsset.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="aboutmain">
          <div className="aboutleft">
            <h1>About us</h1>
            <p>
              Our team at All Round Staffing has more than 10 years of
              experience in the field of Sourcing & Staffing candidates. The key
              focus of the company is to execute hiring strategies with the aim
              of achieving high quality, cost-effective and timely filling of
              roles .
            </p>
          </div>
          <div className="aboutright">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="below">
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              {" "}
              All Round staffing is a Sourcing agency, we specialize in
              Executive Searches to find and deliver the Best, excellent and
              qualified candidates &for your requirements. We interview until we
              find the necessary passion, skills, and experience of the
              candidates as no other staffing agencies. For Applicants who
              apply:- We work hard to find the opportunity you deserve depending
              on the experience, education, and responsibilities which our
              client is seeking. Once we understand what your expertise are, we
              attempt to find or create a situation in which those needs will be
              satisfied. This is what makes us different from other staffing
              agencies. We strive to create a long-term relationship based on
              meeting your requirements. We make the search process very easy,
              many careers start here. It is not just a different way to find
              and deliver candidates but a better way because your business will
              prosper. We offer Fresh Talent, Qualified Personnel & Wider
              choice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
