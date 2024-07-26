import { FC, useState } from "react";
import "./style.css";
import { addCourse } from "../../store/slices/courseSlise";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function getRandom(): number {
  return Math.floor(Math.random() * 999999999);
}

interface CourseInfo {
  name: string;
  author: string;
  linkVideo: string;
  description: string;
}

export const AddCourse:FC = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState<CourseInfo>({
    name: "",
    author: "",
    linkVideo: "",
    description: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInfo((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const { name, author, linkVideo, description } = info;

  const addCourseButton = () => {
    const randomId = getRandom();

    if (name && author && linkVideo && description) {
      dispatch(
        addCourse({
          id: randomId,
          name: name,
          author: author,
          linkVideo: linkVideo,
          description: description,
        })
      );
    }
  };

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

          {/* <input className='inputAddCourse' type='text' name='description' /> */}
        </div>
        <div className='buttonToAddCourse'>
          <Link to='/course'>
            <button onClick={addCourseButton}>Add Course</button>
          </Link>
          <Link to='/course'>
            <button>Return</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
