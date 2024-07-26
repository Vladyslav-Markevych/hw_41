import { FC } from "react";
import listImage from "../images/image";
import "./style.css";

export const Company:FC = () => {
  return (
    <div className='company'>
      <ul className='list-block'>
        {listImage.map((source, index) => {
          return (
            <li key={index}>
              <img src={source} alt='Company logo' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
