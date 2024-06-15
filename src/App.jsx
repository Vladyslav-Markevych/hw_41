import React from "react";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className='App'>
      <Info />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
