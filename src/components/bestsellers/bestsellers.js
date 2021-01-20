import React, { useState, useEffect } from "react";
import CakeCard from "../cake-card/cakeCard";
import Slider from "react-slick";
import { data } from "../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Bestsellers() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    setDataArray([...data]);

    return () => {
      setDataArray([]);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="bestsellers">
      <div className="bestsellers-heading">
        <p>Бестселлеры</p>
      </div>

      <Slider {...settings}>
        {dataArray.length > 0 &&
          dataArray.map((item) => <CakeCard key={item.id} item={item} />)}
      </Slider>
    </div>
  );
}
