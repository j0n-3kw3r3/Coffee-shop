import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    if (email == "coffeeshop@gmail.com" && password == "password") {
      setAuth(true);

      console.log("Welcome".email);
    } else {
      console.log("Admin only");
    }
  };

  return (
    <div className="adminauth">
      <h2>Login As Admin</h2>
      <div className="w-[300px] mx-auto">
        <form action="">
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
            placeholder="Email"
            className=" w-full border p-1 mb-2"
          />
          <input
            type="password"
            name="Password"
            value={password}
            onChange={passwordHandler}
            placeholder="Password"
            className=" w-full border p-1 mb-2"
          />
          <input
            type="button"
            value="SignIn"
            onClick={login}
            className=" w-full border p-1 mb-2 bg-theme text-white"
          />
        </form>
      </div>
      {auth && navigate("/admin")}
    </div>
  );
};

export default Admin;
