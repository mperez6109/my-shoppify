import React from 'react';
import '../styles/navbar.css';

const Header = () => (
<nav className="navbar navbar-expand-lg navbar-light navbar__link" style={{backgroundColor: "#81a1cf"}}>
        <p><a className="shine" href="https://appdeveloperweb.com">AppDeveloperWeb.Com</a></p>
        <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav-martin mr-auto">
            <li className="nav-martin">
              <a className="" href="https://appdeveloperweb.com/#/about">About</a>
            </li>
            <li className="nav-martin">
              <a className="" href="https://appdeveloperweb.com/#/services">Services</a>
            </li>
            <li className="nav-martin">
              <a className="" href="https://appdeveloperweb.com/#/contact">Contact</a>
            </li>
           {/* <li className="nav-item dropdown"> 
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">action2</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">action3</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
             */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 searchInputColor" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn my-2 my-sm-0 searchBottonColor" type="submit">Search</button>
          </form>
        </div>
      </nav>
);

export default Header;