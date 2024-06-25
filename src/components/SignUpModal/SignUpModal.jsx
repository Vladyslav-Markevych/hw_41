import { useState, useEffect } from "react";
import "./style.css";

export function SignUpModal() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isPushed, setIsPushed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOkFullName, setIsOkFullName] = useState(false);
  const [isOkPassword, setIsOkPassword] = useState(false);
  const [isOkEmail, setIsOkEmail] = useState(false);
  const [errorInput, setErrorInput] = useState({
    fullNameError: "",
    emailError: "",
    passwordError: "",
  });

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
      setErrorInput({
        fullNameError: "",
      });
    } else {
      setIsOkFullName(false);
      setErrorInput({
        fullNameError:
          "Full name should have at least two words and each word should has at least two letters",
      });
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
      setErrorInput({
        passwordError: "",
      });
    } else {
      setIsOkPassword(false);
      setErrorInput({
        passwordError:
          "password should contain not less than 8 symbols and not more than 15. password should contain at least one number, at least one letter and at least one special symbol",
      });
    }
    setPassword(event.target.value);
  }
  function onChangeEmail(event) {
    const hasChar = /@/.test(event.target.value);
    if (hasChar) {
      setIsOkEmail(true);
      setErrorInput({
        emailError: "",
      });
    } else {
      setIsOkEmail(false);
      setErrorInput({
        emailError: "email should containt at least symbol @",
      });
    }
    setEmail(event.target.value);
  }

  return (
    <div className='signUpModal'>
      <div className='SignUpModalWrapper'>
        <p className='SignUp-title'>Sign up and start learning</p>
        <form className='SignUp-wrapper' onSubmit={onSubmit}>
          {errorInput.fullNameError ? (
            <p className='popup-error'>{errorInput.fullNameError}</p>
          ) : (
            <></>
          )}
          <input
            className='signUp-input'
            value={fullName}
            onChange={onChangeFullName}
            name='fullName'
            type='text'
            placeholder='Full Name'
          />
          {errorInput.emailError ? (
            <p className='popup-error'>{errorInput.emailError}</p>
          ) : (
            <></>
          )}
          <input
            className='signUp-input'
            onChange={onChangeEmail}
            value={email}
            name='email'
            type='email'
            placeholder='Email'
          />
          {errorInput.passwordError ? (
            <p className='popup-error'>{errorInput.passwordError}</p>
          ) : (
            <></>
          )}
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
            onClick={() => setIsPushed(true)}
            className={isCorrect ? "signUp-button active" : "signUp-button"}
            disabled={!isCorrect}
          >
            Sign Up
          </button>
          {isPushed ? (
            <img
              className='validOk'
              src='https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png'
              alt='Ok'
            />
          ) : (
            <></>
          )}
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
