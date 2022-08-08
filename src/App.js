import * as React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/view/Custumer";
import AdminAuth from "./component/view/AdminAuth";
import Admin from "./component/view/Admin";
import Menu from "../src/component/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const BrandNameContext = React.createContext();
function App() {
  return (
    <BrandNameContext.Provider className="App  " value={"Coffee Shop"}>
      <Router>
        <div className=" grid grid-cols-12 h-screen ">
          <div className=" col-span-10 relative">
            <Header />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/adminauth/*" element={<AdminAuth />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
          </div>
          <div className=" col-span-2 bg-theme">
            <Menu />
          </div>
        </div>
      </Router>
    </BrandNameContext.Provider>
  );
}

export default App;
