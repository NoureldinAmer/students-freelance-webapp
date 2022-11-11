import React from "react";
import BusinessNavbar from "./Business/Navbar";
import FreelanceNavbar from "./Freelance/Navbar";

function NavBar(props) {
  return localStorage.getItem("role") === "freelance" ? (
    <FreelanceNavbar>{props.children}</FreelanceNavbar>
  ) : (
    <BusinessNavbar>{props.children}</BusinessNavbar>
  );
}

export default NavBar;
