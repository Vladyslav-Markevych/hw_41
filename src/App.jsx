import React from "react";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Course } from "./components/Course";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpModal } from "./components/SignUpModal";
import { AddCourse } from "./components/AddCourse/AddCourse";
import { ChoosenCourse } from "./components/ChoosenCourse";
import { Profile } from "./components/Profile/";
import { EditCourse } from "./components/EditCourse/EditCourse";

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
          <Route path='profile' element={<Profile />} />
          <Route path='course' element={<Course />} />
          <Route path='course/addcourse' element={<AddCourse />} />
          <Route path='course/:ChoosenCourse' element={<ChoosenCourse />} />
          <Route
            path='course/editcourse/:ChoosenCourse'
            element={<EditCourse />}
          />
          <Route path='signup' element={<SignUpModal />} />
        </Route>
      </Routes>
    </Router>
  );
}
