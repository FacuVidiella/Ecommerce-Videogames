import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./carouselButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
import "./carousel.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/detailActions.js";
import img from '../../img/user-icon.jpg'


const EmblaCarousel = ({ array, id }) => {

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [game, setGame] = useState(array);
  const dispatch = useDispatch();


  const state = useSelector(state => state.rootReducer.offers.length > 0 ? state.rootReducer.offers : state.rootReducer.games)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);


  useEffect(() => {
    setTimeout(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, 250);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {state? state.map(e => {
              if (e.discount > 20) {
                return (
                  <div className="embla__slide" key={e.id}>
                    <div className="embla__slide__inner">
                        <h2 className="embla_title">{e.name}</h2>
                        <h2 className="embla_discount">{e.discount}% de descuento!</h2>
                        <img
                          className="embla__slide__img"
                          src={e.image}
                          alt="A cool cat."
                        />
                      
                    </div>
                  </div>
                )
              }
            }
            ) : <img src={img} alt="img"/>}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
