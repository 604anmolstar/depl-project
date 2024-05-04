import React, { Component } from "react";
import "./Navbar.css";
import logo from "./Navbar-logo-Image/1706861731844.jpeg"

class Navbar extends Component {
  state = { clicked: false, isScrolled: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled });
    }
  };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { isScrolled, clicked } = this.state;
    const navbarClasses = clicked ? "#navbar active" : "#navbar";
    const logoClasses = isScrolled ? "rounded-[50px]" : "";

    return (
      <>
        <nav className={logoClasses} id="Navbarmnav" >
          <a href="9">
            <img
              src={logo}
              alt="logo"
              className="w-[200px] h-[70px] object-contain"
            />
          </a>
          <div>
            <ul id="navbar" className={navbarClasses}>
              <li>
                <a href="*" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="*">About</a>
              </li>
              <li>
                <a href="*">Contact</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
