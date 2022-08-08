import React from "react";
import { FaMugHot } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BrandNameContext } from "../App";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const brand = useContext(BrandNameContext);
  return (
    <div className=" grid grid-cols-3 text-theme border shadow py-3 bg-white">
      <Link to="/">
        <FaMugHot
          style={{ width: "25px", height: "40px", marginLeft: "50px" }}
        />
      </Link>
      <h1 className="logo col-span-2 text-3xl font-bold mt- ">{brand}</h1>
    </div>
  );
};

export default Header;
