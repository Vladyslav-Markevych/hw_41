import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function useCourseObj() {
  const { ChoosenCourse } = useParams();
  const course = useSelector((state) => state.courses);
  const ChoosenItem = course.findIndex((item) => item.id == ChoosenCourse);

  if (ChoosenItem >= 0) {
    const NamedCourse = course[ChoosenItem];
    return NamedCourse;
  }
  return null;
}

export default useCourseObj;
