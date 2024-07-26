import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


interface courseProps {
  id: string; 
  name: string;
  author: string;
  linkVideo: string;
  description: string;
}
export interface stateProps {
  courses: courseProps[]
}

export function useCourseObj() {
  const { ChoosenCourse } = useParams<string>();
  const course = useSelector((state:stateProps) => state.courses);
  const ChoosenItem = course.findIndex((item) => item.id == ChoosenCourse);

  if (ChoosenItem >= 0) {
    const NamedCourse = course[ChoosenItem];
    return NamedCourse;
  }
  return null;
}

export default useCourseObj;
