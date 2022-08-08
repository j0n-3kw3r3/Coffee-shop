import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu p-4 text-white ">
      <ul>
        <Link className="li" to="/">
          Custumer
        </Link>
        <Link className="li" to="/adminauth">
          Admin
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
