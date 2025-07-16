import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <li className="hover:text-[#262626] text-[#767676] text-sm">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:text-[#262626] text-[#767676] text-sm">
        <Link to={"/shop"}>Shop</Link>
      </li>
    </>
  );
};

export default Footer;
