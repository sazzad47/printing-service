import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { BsViewList, BsPersonFillLock } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import ProductLIst from "./ProductLIst";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { IconButton } from "@mui/material";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <ContactInfo/>
    <nav className="bg-white border-gray-300">
      <div className="h-[15vh] flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            height={50}
            width={80}
            className="mr-3"
            alt="Logo"
          />
        </Link>
        <ul className="flex list-none flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <button
              onClick={() => setOpen(!open)}
              className={`dropdown ${
                open ? "active" : ""
              } px-5 py-2 flex gap-2 h-[3rem] text-lg text-white cursor-pointer items-center font-medium bg-fuchsia-900 rounded-full hover:bg-primaryBtnHoverBg md:mr-0`}
              type="button"
            >
              <BsViewList color="white" />
              Products
              <span className="arrow"></span>
            </button>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
        <ul className="flex list-none flex-col mt-4 font-medium md:flex-row items-center md:space-x-8 md:mt-0">
          <li>
            <Cart />
          </li>
          <li>
            <IconButton >
              <BsPersonFillLock className="text-5xl text-fuchsia-900" />
            </IconButton>
          </li>
          <li>
            <IconButton >
              <AiOutlineMenuUnfold className="text-5xl text-fuchsia-900" />
            </IconButton>
          </li>
        </ul>
      </div>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={500}
        classNames="nav-product-items"
      >
        <ProductLIst />
      </CSSTransition>
    </nav>
    </>
  );
};

export default Navbar;
