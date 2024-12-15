import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
function Footer() {
  return (
    <div className='footer'>
      <p>Copyright © 2022 All Round Staffing - All Rights Reserved.</p>
      <div className="links">
      <Link to ="/"><a>Home</a></Link>
      <Link to="About"><a>About Us</a></Link>
      <Link to="Services"><a>Services</a></Link>
      <Link to="Career"><a>Career</a></Link>
      <Link to="Contact"><a>Contact Us</a></Link>
      <Link to="Privacy"><a>Privacy Policy</a></Link>
      <Link to="Terms"><a>Terms and Conditions</a></Link>
      </div>
      <hr />
      <div className="footerbottom">
        <a >Powered by</a>
        <a href="https://www.godaddy.com/websites/website-builder?is
        // c=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-in_corp_applications_base"> GoDaddy</a>
      </div>
    </div>
  )
}

export default Footer