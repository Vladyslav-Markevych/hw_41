import quote from "./quote.svg";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

export function Reviews() {
  const [descArray, setDescArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then((response) => setDescArray(response.slice(0, 10)))
      .catch(setDescArray([]));
  }, []);
  return (
    <>
      <p className='swipe-title'>
        How learners like you are achieving their goals
      </p>
      <ul>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {descArray.length ? (
            descArray.map(({ body, id, name, email }) => {
              return (
                <SwiperSlide key={id}>
                  <li className='listItem'>
                    <img className='quote' src={quote} alt='quotes' />
                    <p className='descriptionText'> {body}</p>
                    <span className='initial'>{name}</span>
                    <span className='nameItem'>{name}</span>
                    <p className='jobItem'>{email}</p>
                  </li>
                </SwiperSlide>
              );
            })
          ) : (
            <div>
              <p>Comments not found</p>
            </div>
          )}
        </Swiper>
      </ul>
    </>
  );
}

//
