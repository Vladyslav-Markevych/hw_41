import { useState } from "react";
import { useCourseObj } from "../CourseObj/useCourseObj";
import { useDispatch } from "react-redux";
import { editCourse } from "../../store/slices/courseSlise";
import { Link } from "react-router-dom";
import "./style.css";
import { FC } from "react";

export const EditCourse:FC = () => {
  const course = useCourseObj();
  const dicpatch = useDispatch();

  const [info, setInfo] = useState({
    id: course?.id || "",
    name: course?.name || "",
    author: course?.author || "",
    linkVideo: course?.linkVideo || "",
    description: course?.description || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInfo((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const saveEdit = () => {
    dicpatch(editCourse(info));
  };

  if (course) {
    return (
      <div>
        <form className='formAddCourse'>
          <div className='inputForCourse'>
            <label htmlFor='name'>Name:</label>
            <input
              className='inputAddCourse'
              type='text'
              name='name'
              value={info.name}
              onChange={handleChange}
            />
          </div>
          <div className='inputForCourse'>
            <label htmlFor='author'>Author:</label>
            <input
              className='inputAddCourse'
              type='text'
              name='author'
              value={info.author}
              onChange={handleChange}
            />
          </div>
          <div className='inputForCourse'>
            <label htmlFor='linkVideo'>
              Link to video(only youtube code 'embed'):
            </label>
            <input
              className='inputAddCourse'
              type='url'
              name='linkVideo'
              value={info.linkVideo}
              onChange={handleChange}
            />
          </div>
          <div className='inputForCourse'>
            <label htmlFor='description'>Description:</label>
            <textarea
              name='description'
              className='textAreaCourse'
              value={info.description}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className='ButtonEditBlock'>
          <Link to={`/course/${info.id}`}>
            <button className='editButtonCourse' onClick={saveEdit}>
              Save
            </button>
          </Link>
          <Link to='/course'>
            {" "}
            <button className='admButtons'>Return</button>
          </Link>
        </div>
      </div>
    );
  }
  return <div>Edit Course</div>;
};
