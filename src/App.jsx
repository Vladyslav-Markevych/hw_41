import React from "react";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Course } from "./components/Course";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpModal } from "./components/SignUpModal";
import { AddCourse } from "./components/AddCourse/AddCourse";

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
          <Route path='course' element={<Course />} />
          <Route path='course/addcourse' element={<AddCourse />} />
          <Route path='signup' element={<SignUpModal />} />
        </Route>
      </Routes>
    </Router>
  );
}
