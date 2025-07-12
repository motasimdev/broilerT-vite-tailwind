import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Link to={"/"}>
        <li className="hover:text-[#262626] text-[#767676] text-sm">Home</li>
      </Link>
      <Link to={"/shop"}>
        <li className="hover:text-[#262626] text-[#767676] text-sm">Shop</li>
      </Link>
    </>
  );
};

export default Footer;
