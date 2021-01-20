import React from "react";
import Nav from "../../components/navigation/nav";
import TodaysCake from "../../components/todays-cake/todaysCake";

// images
import mainPic1 from "../../assets/imgs/main-pic.svg";
import mainCake from "../../assets/imgs/main-cake.svg";
import arrowLeft from "../../assets/imgs/arrow-left.svg";
import classicCake from "../../assets/imgs/classic-cakes.svg";
import autorCake from "../../assets/imgs/autor.svg";
import dessertCake from "../../assets/imgs/dessert.svg";
import orderCake from "../../assets/imgs/order.svg";
import cakeIco from "../../assets/imgs/cake-ico.svg";
import truckIco from "../../assets/imgs/truck-ico.svg";
import presentIco from "../../assets/imgs/present-ico.svg";
import Bestsellers from "../../components/bestsellers/bestsellers";

export default function Homepage() {
  return (
    <div className="homepage">
      <img className="main-pic-1" src={mainPic1} alt="illustration" />

      <Nav />
      <div className="container">
        <div className="intro">
          <div className="intro-inner intro-img">
            <img src={mainCake} alt="cake" />
          </div>
          <div className="intro-inner intro-text">
            <div className="intro-text-wrapper">
              <div className="intro-text-inner">
                <p className="text-1">Здесь есть</p>
                <p className="text-2">все твои</p>
                <p className="text-3">любимые</p>
                <p className="text-4">торты</p>
              </div>
              <div className="intro-text-button">
                <button>Заказать</button>
              </div>
            </div>
            <div className="pick">
              <div className="pick-inner">
                <div className="arrow-left-ico">
                  <img src={arrowLeft} alt="arrow-left" />
                </div>
                <p>Выбери раздел</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sections">
          <a href="#">
            <div className="section-item">
              <div className="section-item-img">
                <img src={classicCake} alte="classic-cake" />
              </div>
              <p>Классические</p>
            </div>
          </a>
          <a href="#">
            <div className="section-item">
              <div className="section-item-img">
                <img src={autorCake} alte="classic-cake" />
              </div>
              <p>Авторские</p>
            </div>
          </a>
          <a href="#">
            <div className="section-item">
              <div className="section-item-img">
                <img src={dessertCake} alte="classic-cake" />
              </div>
              <p>Дессерты</p>
            </div>
          </a>
          <a href="#">
            <div className="section-item">
              <div className="section-item-img">
                <img src={orderCake} alte="classic-cake" />
              </div>
              <p>Торты на заказ</p>
            </div>
          </a>
        </div>

        <section className="about-company-section">
          <div className="section-illustration"></div>
          <div className="about-company-items">
            <div className="about-company-item">
              <div className="company-item-inner">
                <div className="item-ico">
                  <img src={truckIco} alte="cake" />
                </div>
                <p>Доставка в любую точку города</p>
              </div>
            </div>
            <div className="about-company-item middle">
              <div className="company-item-inner">
                <div className="item-ico">
                  <img src={cakeIco} alte="cake" />
                </div>
                <p>Собери торт по своему вкусу</p>
              </div>
            </div>
            <div className="about-company-item">
              <div className="company-item-inner">
                <div className="item-ico">
                  <img src={presentIco} alte="present" />
                </div>
                <p>Получи подарки с каждым заказом</p>
              </div>
            </div>
          </div>
        </section>
        <section className="todays-cake-section">
          <TodaysCake />
          <div className='todays-cake-illustration'></div>
        </section>
        <section className='bestsellers-section'>
            <Bestsellers />
        
        </section>
      </div>
    </div>
  );
}
