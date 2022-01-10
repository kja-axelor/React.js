import React from 'react'
import "./view.css"

export default function Monthview() {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  const firstdayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();
  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

  var daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  
  const c_month = date.getMonth();
  return (
    <div>
      <div className="months">
        <h1>{months[c_month]}</h1>
        <i className="fas fa-angle-up up"></i>
        <p>{date.toDateString()}</p>
        <i className="fas fa-angle-down down"></i>
      </div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              {daysList.map((day) => {
                return <th key={day}>{day}</th>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
