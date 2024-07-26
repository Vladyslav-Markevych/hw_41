import { useCourseObj } from "../CourseObj/useCourseObj";
import "./style.css";

export function ChoosenCourse() {
  const NamedCourse = useCourseObj();

  if (!NamedCourse) {
    return <p>Course not found.</p>;
  }

  const testURL = NamedCourse.linkVideo;
  const forURL = "https://";
  const errorUrl =
    "https://www.youtube.com/embed/22z31vdqnWI?si=GTGgSp7zf0-NWMST";
  if (NamedCourse) {
    return (
      <div className='courseItem'>
        <p className='titleCourse'>{NamedCourse.name}</p>
        <p className='author'>Author: {NamedCourse.author}</p>
        <iframe
          width='560'
          height='315'
          src={testURL.includes(forURL) ? testURL : errorUrl}
        ></iframe>
        {/* <video className='video' controls>
          <source src={NamedCourse.linkVideo} />
          Your browser does not support the video tag.
        </video> */}
        <p className='description'>{NamedCourse.description}</p>
      </div>
    );
  }
  return <div>One Course</div>;
}
