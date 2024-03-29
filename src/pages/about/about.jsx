import "./about.css";
import aboutbg from "../../assets/cafe-img1.jpeg";
import { Element } from "react-scroll";

export default function About() {
  return (
    <>
      <Element name="about">
        <div className="about-container">
          <img className="background" src={aboutbg} alt="background-image" />
          <div className="about-content">
            <div className="ac-left">
              <h1>About Us</h1>
              <p>
                In the heart of a quaint town, nestled amidst cobblestone
                streets and cozy alleyways, there stood a charming café known as
                Café Amor. It had earned its reputation not just for its
                delicious fare, but for the heartwarming atmosphere that
                enveloped every visitor who crossed its threshold. The story of
                Café Amor began with a simple dream shared by a group of friends
                who longed to create a haven where people could come together
                over good food and even better company. With a shared passion
                for culinary delights, they set out to craft a menu that
                celebrated the flavors of their community, drawing inspiration
                from local ingredients and time-honored recipes. What made Café
                Amor truly special, however, was its unwavering commitment to
                spreading love and kindness. Every dish served was prepared with
                care and attention to detail, infused with a touch of warmth
                that could only come from a place fueled by genuine affection.
                Word of this extraordinary café spread quickly, attracting not
                only locals but travelers from far and wide who were drawn to
                its welcoming ambiance and comforting cuisine. Whether it was a
                steaming cup of freshly brewed coffee or a slice of homemade
                pie, each bite at Café Amor was imbued with a sense of love and
                belonging. The café itself was a cozy retreat from the hustle
                and bustle of everyday life, with soft music playing in the
                background and the scent of freshly baked pastries lingering in
                the air.
              </p>
            </div>
            <div className="ac-right">Since 1982</div>
          </div>
        </div>
      </Element>
    </>
  );
}
