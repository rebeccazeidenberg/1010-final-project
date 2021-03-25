import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
      <div className="NavWrapper">
        <div className="NavBar">
            <nav>
            <ul className="NavList">
              <li >
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/submissions">Submissions</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    )
}

export default Nav;