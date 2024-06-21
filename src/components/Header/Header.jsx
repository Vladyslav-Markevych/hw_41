import "./header.css";
import { useState } from "react";

import logo from "../../logo.svg";
import { Input } from "../Input";
import { Link } from "../Link";
import { Button } from "../Button";
import cart from "../Button/cart.svg";
import browser from "../Button/browser.svg";
import { SignUpModal } from "../SignUpModal";

export function Header() {
  const [isSignUpModal, setIsSignUpModal] = useState(false);

  const closeModal = () => {
    setIsSignUpModal(false);
  };

  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <Link>Categories</Link>
      <Input />
      <Link>Udemy Business</Link>
      <Link>Teach on Udemy</Link>
      <div className='button-header'>
        <Button forCss='uncolor'>
          <img src={cart} alt='cart' />
        </Button>
        <Button forCss='white'>Log in</Button>
        <Button onClick={() => setIsSignUpModal(true)} forCss='black'>
          Sign Up
        </Button>
        <Button forCss='uncolor border'>
          <img src={browser} alt='language' />
        </Button>
      </div>
      <SignUpModal isSignUpModal={isSignUpModal} closeModal={closeModal} />
    </header>
  );
}
