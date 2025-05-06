import "./SwitcherButton.scss";

export enum buttonType {
  SliderSwitcher = "SliderSwitcher",
  TimeSwitcher = "TypeSwitcher",
}
type SwitcherButtonPropsType = {
  type: buttonType;
  active: boolean;
  style?: any;
  onClick?: () => void;
};

export default function SwitcherButton({ type, active, style, onClick }: SwitcherButtonPropsType) {
  return (
    <button
      style={style}
      className={`switcher-button__container ${active && "active"} ${
        type == buttonType.SliderSwitcher ? "slider-button" : type == buttonType.TimeSwitcher ? "time-button" : ""
      }`}
      onClick={onClick}
    >
      <div className="switcher-button__arrow"></div>
    </button>
  );
}
