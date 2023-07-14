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
  const [open] = useState(false);
  return (
    <>
    <div className="hidden md:block">
    <ContactInfo/>
    </div>
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
        <ul className="hidden md:flex list-none flex-row font-medium md:space-x-8">
          <li>
            <button
              // onClick={() => setOpen(!open)}
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
          <li className="">
            <SearchBar />
          </li>
        </ul>
        <ul className=" flex list-none font-medium items-center space-x-8">
          <li>
            <Cart />
          </li>
          <li>
            <IconButton className="p-0 m-0">
              <BsPersonFillLock className="text-3xl md:text-5xl text-fuchsia-900" />
            </IconButton>
          </li>
          <li>
            <IconButton className="p-0 m-0">
              <AiOutlineMenuUnfold className="text-3xl md:text-5xl text-fuchsia-900" />
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
