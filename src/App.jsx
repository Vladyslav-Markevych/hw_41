import React from "react";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpModal } from "./components/SignUpModal";

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Info />
              <Header />
            </>
          }
        >
          <Route
            path='/'
            element={
              <>
                <Main />
                <Footer />{" "}
              </>
            }
          />
          <Route path='signup' element={<SignUpModal />} />
        </Route>
      </Routes>
    </Router>
  );
}
