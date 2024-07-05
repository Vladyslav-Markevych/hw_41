import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
export function Course() {
  const course = useSelector((state) => state.courses);
  console.log(course);
  const ifCourseAvaliable = course?.length;
  const [isSubmitted, serIsSubmitted] = useState(true);

  function changeAdminMode() {
    isSubmitted ? serIsSubmitted(false) : serIsSubmitted(true);
  }

  return (
    <>
      <div className='admin-mode'>
        {isSubmitted && (
          <Link to='addcourse'>
            <button>Add Course</button>
          </Link>
        )}
        <button onClick={changeAdminMode}>
          Admin Mode {isSubmitted ? "On" : "Off"}
        </button>{" "}
      </div>
      <div className='course-block'>
        {ifCourseAvaliable ? (
          course.map((items) => {
            return (
              <>
                <div
                  className={
                    isSubmitted ? "EachCourseAdmin EachCourse " : "EachCourse"
                  }
                >
                  {isSubmitted && (
                    <div className='editbuttons'>
                      <button>edit</button> <button>x</button>
                    </div>
                  )}

                  <p> {items.name}</p>
                  <p> {items.author}</p>
                  <p> {items.linkVideo}</p>
                  <p> {items.description}</p>
                </div>
              </>
            );
          })
        ) : (
          <p>Please add course</p>
        )}
      </div>
    </>
  );
}
