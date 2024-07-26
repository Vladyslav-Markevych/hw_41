import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delCourse } from "../../store/slices/courseSlise";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./style.css";
import { useState } from "react";
import { addOrDelFavorite } from "../../store/slices/favoriteSlice";

export function Course() {
  const course = useSelector((state) => state.courses);
  const favorite = useSelector((state) => state.favorite);
  const ifCourseAvaliable = course?.length;
  const [isSubmitted, serIsSubmitted] = useState(false);

  function changeAdminMode() {
    isSubmitted ? serIsSubmitted(false) : serIsSubmitted(true);
  }

  const handleFavorite = (items) => {
    dispatch(addOrDelFavorite(items));
  };

  const dispatch = useDispatch();

  const delButton = (id) => {
    dispatch(delCourse(id));
  };

  return (
    <>
      <div className='admin-mode'>
        {isSubmitted && (
          <Link to='addcourse'>
            <button className='admButtons'>Add Course</button>
          </Link>
        )}
        <button className='admButtons' onClick={changeAdminMode}>
          Admin Mode {isSubmitted ? "On" : "Off"}
        </button>
      </div>
      <div className='course-block'>
        {ifCourseAvaliable ? (
          course.map((items) => {
            const isfavorite = favorite.find((fav) => fav.id === items.id);

            return (
              <div
                key={items.id}
                className={
                  isSubmitted ? "EachCourseAdmin EachCourse " : "EachCourse"
                }
              >
                {" "}
                <div>
                  <FavoriteIcon
                    className='iconFavorite'
                    onClick={() => handleFavorite(items)}
                    color={isfavorite ? "success" : "disabled"}
                  />
                </div>
                {isSubmitted && (
                  <div className='editbuttons'>
                    <Link to={`/course/editcourse/${items.id}`}>
                      <button className='admButtons'>edit</button>
                    </Link>
                    <button
                      className='delButton admButtons'
                      onClick={() => delButton(items)}
                    >
                      x
                    </button>
                  </div>
                )}
                <p className='titleCourseName'> {items.name}</p>
                <p>Author: {items.author}</p>
                <p className='desc-text'> {items.description}</p>
                <Link className='linkToChoosen' to={`/course/${items.id}`}>
                  <button className='linkToChoosenButton'> Open Course</button>{" "}
                </Link>
              </div>
            );
          })
        ) : (
          <p>Please add course</p>
        )}
      </div>
    </>
  );
}
