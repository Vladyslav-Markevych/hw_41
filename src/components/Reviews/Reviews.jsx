import descArray from "../description/description.js";
import quote from "./quote.svg";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

export function Reviews() {
  return (
    <ul>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {descArray.map(({ text, id, name, job }) => {
          return (
            <SwiperSlide key={id}>
              <li className='listItem'>
                <img className='quote' src={quote} alt='quotes' />
                {/* Нагуглил, пишут, что так не совсем правильно */}
                <p
                  className='descriptionText'
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
                <span className='initial'>
                  {name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className='nameItem'>{name}</span>
                <p className='jobItem'>{job}</p>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
}
