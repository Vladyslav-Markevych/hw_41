import "./info.css";
import React, { useState } from "react";

export function Info() {
  const savedStorage = localStorage.getItem("isClosed") === "true";
  const [isClosed, setIsClosed] = useState(savedStorage);

  const toClose = () => {
    setIsClosed(true);
    localStorage.setItem("isClosed", true);
  };

  return (
    <>
      {isClosed ? (
        <></>
      ) : (
        <div id='forClose' className='info-block'>
          <p className='infoText'>
            New to Udemy? Learning leads to opportunity{" "}
            <span className='info-desc'>
              | Shop now to get an exclusive offer: Courses from €14.99.
            </span>
          </p>
          <p className='infoText'>
            Ends <span className='info-date'>12.06.2024</span>
          </p>
          <button className='closeButton' onClick={toClose}>
            x
          </button>
        </div>
      )}
    </>
  );
}
