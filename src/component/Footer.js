import React from "react";
import { useContext } from "react";
import { BrandNameContext } from "../App";

const Footer = () => {
  const context = useContext(BrandNameContext);
  return (
    <>
      <h4 className="footer absolute bottom-0 text-xs   border w-full text-center p-2 bg-white">
        2022 &copy; {context}
      </h4>
    </>
  );
};

export default Footer;
