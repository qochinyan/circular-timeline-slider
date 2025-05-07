import { TimePeriodData } from "../TimeSliderBlock/types";
import "./AnimatedCircles.scss";

interface Props {
  periods: TimePeriodData[];
  currentIndex: number;
  onCircleClick: (index: number) => void;
}

export default function AnimatedCircles({
  periods,
  currentIndex,
  onCircleClick,
}: Props) {
  const radius = 265;
  const total = periods.length;
  const angleStepDeg = 360 / total;
  const angleStartDeg = -60; 

  return (
    <div className="circles-container">
      {periods.map((_, i) => {
        const angleDeg = angleStartDeg + angleStepDeg * i;
        const rotateGroupDeg = -angleStepDeg * currentIndex;
        const totalDeg = rotateGroupDeg + angleDeg;

        return (
          <span
            key={i}
            className={`circle-box ${i === currentIndex ? "active" : ""}`}
            style={{
              transform: `
                rotate(${totalDeg}deg)
                translate(${radius}px)
                rotate(${-totalDeg}deg)
              `,
            }}
            onClick={() => onCircleClick(i)}
          >
            {((i + currentIndex) % total) + 1}
          </span>
        );
      })}
    </div>
  );
}
