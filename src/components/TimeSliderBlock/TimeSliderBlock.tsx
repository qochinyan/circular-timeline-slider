import { TimePeriodData } from "./types";
import "./TimeSliderBlock.scss";
import SwitcherButton, { buttonType } from "../SwitcherButton/SwitcherButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "../AnimatedNumber/AnimatedNumber";
import AnimatedCircles from "../AnimateCircles/AnimatedCircles";

export default function TimeSliderBlock({ sampleData }: { sampleData: TimePeriodData[] }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  // let currentEventsData = sampleData[currentSlideIndex].events;
  let currentData = sampleData[currentSlideIndex];
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [displayName, setDisplayName] = useState(currentData.name);

  const onSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAnimate(true);
    });
    setTimeout(() => {
      setAnimate(false);
      setDisplayName(currentData.name);
    }, 1000);
   
    return () => cancelAnimationFrame(id);
  }, [currentSlideIndex]);

  return (
    <div className="block__container">
      <span className="horizontal-line"></span>
      <span className="vertical-line"></span>
      <span className="circle-line">
      <span className={`period-name ${!animate ? "animate":""}`}>{displayName}</span>
        <AnimatedCircles
          periods={sampleData}
          currentIndex={currentSlideIndex}
          onCircleClick={(index) => {
            setCurrentSlideIndex(index);
          }}
        />
      </span>
      <div className="years-block">
        <AnimatedNumber end={currentData.from} className="year-from" />
        <AnimatedNumber end={currentData.to} className="year-to" />
      </div>
      <div className="heading__container">
        <span className="heading__border"></span>
        <h1 className="heading__text">Исторические даты</h1>
      </div>
      <div className="slider__container">
        <div className="slider__switcher">
          <span className="switcher__description">
            {currentSlideIndex + 1 < 10 ? "0" + (currentSlideIndex + 1) : currentSlideIndex + 1}/
            {sampleData.length > 10 ? sampleData.length : "0" + sampleData.length}
          </span>
          <div className="switcher-buttons__box">
            <SwitcherButton
              type={buttonType.TimeSwitcher}
              active={currentSlideIndex > 0 && true}
              onClick={() => {
                setCurrentSlideIndex((index) => {
                  return index > 0 ? index - 1 : index;
                });
              }}
            />
            <SwitcherButton
              style={{ transform: "rotate(180deg)" }}
              type={buttonType.TimeSwitcher}
              active={currentSlideIndex < sampleData.length - 1 && true}
              onClick={() => {
                setCurrentSlideIndex((index) => {
                  return index < sampleData.length - 1 ? index + 1 : index;
                });
              }}
            />
          </div>
        </div>
        <div className={`${animate ? "animate" : ""} slider-content__container`}>
          {!isBeginning && (
            <SwitcherButton
              style={{
                transform: "translate(0, -50%)",
                transformOrigin: "center center",
                position: "absolute",
                left: "-60px",
                top: "50%",
              }}
              type={buttonType.SliderSwitcher}
              active={currentSlideIndex < sampleData.length - 1 && true}
              onClick={() => swiperRef.current?.slideTo(0)}
            />
          )}
          <div className="slider-overflow">
            {" "}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                onSwiperInit(swiper);
              }}
              onSlideChange={onSlideChange}
              className="swiper-box"
              slidesPerView={3}
              spaceBetween={80}
              centeredSlides={false}
              loop={false}
            >
              {currentData.events.map((e, idx) => (
                <SwiperSlide key={idx} className={"swiper-item"}>
                  <span className="slide-year">{e.year}</span>
                  <span className="slide-description">{e.description}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {!isEnd && (
            <SwitcherButton
              style={{
                transform: "rotate(180deg) translate(0, -50%)",
                transformOrigin: "center top",
                position: "absolute",
                right: "-60px",
                top: "50%",
              }}
              type={buttonType.SliderSwitcher}
              active={currentSlideIndex < sampleData.length - 1 && true}
              onClick={() => swiperRef.current?.slideTo((swiperRef.current?.slides.length ?? 1) - 1)}
            />
          )}
        </div>{" "}
      </div>
    </div>
  );
}
