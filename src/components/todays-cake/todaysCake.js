import React from "react";

//imgs
import arrowRight from "../../assets/imgs/arrow-right.svg";
import cake from "../../assets/imgs/autor.svg";

export default function TodaysCake() {
  return (
    <div className="todays-cake">
      <div className="heading">
        <p>Торт дня</p>
        <div className="arrow-right">
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>

      <div className="cake-img">
        <img src={cake} alt="cake" />
      </div>
      <div className='order-now-btn'>
          <button>Заказать сейчас</button>
      </div>
    </div>
  );
}
