import listImage from "../images/image.js";
import "./style.css";

export function Company() {
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
