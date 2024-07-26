import "./header.css";
import { Link, NavLink, Outlet } from "react-router-dom";

import logo from "../../logo.svg";
import { Input } from "../Input";
import { RefWay } from "../RefWay";
import { Button } from "../Button";
import cart from "../Button/cart.svg";
import browser from "../Button/browser.svg";
import { FC } from "react";

export const  Header:FC = () => {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <RefWay>Categories</RefWay>
        <Input />
        <NavLink to='/course'>Course</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <div className='button-header'>
          <Button forCss='uncolor'>
            <img src={cart} alt='cart' />
          </Button>
          <Button forCss='white'>Log in</Button>
          <NavLink to='signup' className={"signup-link"}>
            Sign Up
          </NavLink>
          <Button forCss='uncolor border'>
            <img src={browser} alt='language' />
          </Button>
        </div>
      </header>
      <Outlet />
    </>
  );
}
