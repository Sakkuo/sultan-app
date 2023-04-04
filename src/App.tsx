import React from "react";
import { BrowserRouter, Route, Routes, createBrowserRouter, useLocation, useNavigate, useParams } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";
import NavBar from "./UI/NavBar/NavBar";
import Footer from "./UI/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import Basket from "./components/Basket/Basket";
import { Link } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";

const App = () => {

  const routes = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={"/product/:id"} element={<ProductPage />} />
      <Route path={"/basket"} element={<Basket />}  />
      <Route path={"/admin"} element={<AdminPage />}  />
    </Routes>
  );



  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="content">
          <NavBar />
          <div className="App">{routes}</div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
