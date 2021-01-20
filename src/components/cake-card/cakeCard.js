import React, { useState } from "react";
import "../../assets/sass/cake-card.scss";

import teamIco from "../../assets/imgs/team.svg";
import addToCart from "../../assets/imgs/addToCart.svg";

import heart1 from "../../assets/imgs/favorite.svg";
import heart2 from "../../assets/imgs/favorite2.svg";

export default function CakeCard(props) {
    const { item } = props;
    const imgUrl = item.img;
    const desc = [...item.desc];
    const cakeName = item.name;
    const id = item.id;
    const price = item.price;

  const [like, setLike] = useState(false);
  const [personCount, setPersonCount] = useState(desc[0]);

 

  function getPriceFormat(digit) {
    let curr = digit.toString();
    let result = curr
      .split("")
      .reverse()
      .join("")
      .replace(/\d{3}(?=.)/g, "$& ");
    return result.split("").reverse().join("");
  }

  function handleLike() {
    setLike(!like);
  }

  return (
    <div className="cake-card">
      <div className="heart" onClick={() => handleLike()}>
        {like ? <img src={heart2} /> : <img src={heart1} />}
      </div>
      <div className="cake-img">
        <img src={imgUrl} alt="cake" />
      </div>
      <div className="cake-info-block">
        <p className="cake-name">{cakeName}</p>
        <p className="cake-price">
          <span>{getPriceFormat(price)}</span> руб
        </p>
      </div>
      <div className="card-bottom">
        <div className="team-ico">
          <img src={teamIco} alt="icon" />
        </div>
        <select
          value={personCount}
          onChange={(e) => setPersonCount(e.target.value)}
        >
          {desc.length > 0 &&
            desc.map((item, idx) => (
              <option key={id + "_" + idx}>{item}</option>
            ))}
        </select>
      </div>
      <div className="add-to-cart">
        <img src={addToCart} alt="add to cart" />
      </div>
    </div>
  );
}
