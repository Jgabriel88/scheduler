import React from "react";
import "../styles/DayListItem.scss";
const classnames = require('classnames');


export default function DayListItem(props) {
  const {name, spots, setDay} = props
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spot
  });
  const formatSpots = () => {
    if (spots < 1) {
      return "no spots remaining";
    }
    if (spots === 1) {
      return "1 spot remaining";
    }
    if (spots > 1) {
      return `${spots} spots remaining`;
    }
  }
  return (
    <li
      className={dayClass}
      onClick={() => setDay(name)}
    >
      <h2> {name} </h2>
      <h3> {formatSpots()} </h3>
    </li>
  );
}

