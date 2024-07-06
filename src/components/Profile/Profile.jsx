import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import "../Course/style.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addOrDelFavorite } from "../../store/slices/favoriteSlice";

export function Profile() {
  const fav = useSelector((state) => state.favorite);

  const dispatch = useDispatch();
  const handleFavorite = (item) => {
    dispatch(addOrDelFavorite(item));
  };

  return (
    <div className='block-profile'>
      {fav.length > 0 ? (
        fav.map((item) => {
          const isfavorite = fav.find((fav) => fav.id === item.id);

          return (
            <div key={item.id} className='EachCourse'>
              <FavoriteIcon
                className='iconFavorite'
                onClick={() => handleFavorite(item)}
                color={isfavorite ? "success" : "disabled"}
              />
              <p className='titleCourseName'> {item.name}</p>
              <p>Author: {item.author}</p>
              <p className='desc-text'> {item.description}</p>
              <Link className='linkToChoosen' to={`/course/${item.id}`}>
                <button className='linkToChoosenButton'> Open Course</button>{" "}
              </Link>
            </div>
          );
        })
      ) : (
        <p>Profile</p>
      )}
    </div>
  );
}
