import { useState, useEffect } from "react";
import "./style.css";

export function SignUpModal() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOkFullName, setIsOkFullName] = useState(false);
  const [isOkPassword, setIsOkPassword] = useState(false);
  const [isOkEmail, setIsOkEmail] = useState(false);

  useEffect(() => {
    if (isOkFullName && isOkPassword && isOkEmail) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [isOkFullName, isOkPassword, isOkEmail]);

  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const { fullName, email, password } = event.target.elements;
    console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);
  }

  function onChangeFullName(event) {
    let checkName = event.target.value.split(" ");
    if (
      checkName.length >= 2 &&
      checkName[0].length > 2 &&
      checkName[1].length > 2
    ) {
      setIsOkFullName(true);
    } else {
      setIsOkFullName(false);
    }
    setFullName(event.target.value);
  }
  function onChangePassword(event) {
    const hasLetter = /[a-zA-Z]/.test(event.target.value);
    const hasDigit = /\d/.test(event.target.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(event.target.value);
    const countLetter = event.target.value.length;
    if (
      hasLetter &&
      hasDigit &&
      hasSpecialChar &&
      countLetter > 8 &&
      countLetter < 15
    ) {
      setIsOkPassword(true);
    } else {
      setIsOkPassword(false);
    }
    setPassword(event.target.value);
  }
  function onChangeEmail(event) {
    const hasChar = /@/.test(event.target.value);
    if (hasChar) {
      setIsOkEmail(true);
    } else {
      setIsOkEmail(false);
    }
    setEmail(event.target.value);
  }

  return (
    <div className='signUpModal'>
      <div className='SignUpModalWrapper'>
        <p className='SignUp-title'>Sign up and start learning</p>
        <form className='SignUp-wrapper' onSubmit={onSubmit}>
          <input
            className='signUp-input'
            value={fullName}
            onChange={onChangeFullName}
            name='fullName'
            type='text'
            placeholder='Full Name'
          />
          <input
            className='signUp-input'
            onChange={onChangeEmail}
            value={email}
            name='email'
            type='email'
            placeholder='Email'
          />
          <input
            className='signUp-input'
            onChange={onChangePassword}
            value={password}
            name='password'
            type='password'
            placeholder='Password'
          />
          <div className='signUp-check'>
            <input id='check' type='checkbox' name='check' />
            <label className='signUp-label' htmlFor='check'>
              Send me special offers, personalized recommendations, and learning
              tips.
            </label>
          </div>
          <button
            className={isCorrect ? "signUp-button active" : "signUp-button"}
            disabled={!isCorrect}
          >
            Sign Up
          </button>
        </form>
        <p className='signUp-policy'>
          By signing up, you agree to our <a href=''>Terms of Use</a> and{" "}
          <a href=''>Privacy Policy</a>.
        </p>
        <p>
          Already have an account? <a href=''>Log in</a>
        </p>
      </div>
    </div>
  );
}
