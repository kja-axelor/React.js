import React from 'react'
import "./view.css"

export default function View() {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  const firstdayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();
  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
  
  
  var calendar = ()=>{

     // space logic (prev days)
  let tr = []
  let td = []

  for (let j = firstdayIndex; j > 0; j--) {
    td.push(<td className="disable">{prevLastDay - j + 1}</td>);
  }

  // Loop logic
  let count = firstdayIndex - 1;
  for (let i = 1; i <= lastDay; i++) {
      count += 1;
      // row seperate
      if(count % 7 == 0){  
        tr.push(<tr>{td}</tr>);
        td = [];
        count = 0;
      }
      // today
      if(i === new Date().getDate())
      {
          td.push(<td className="today">{i}</td>);
      }
      else if(count % 7 == 5){
        // friday
          td.push(<td className="friday">{i}</td>)
      }
      else if(count % 7 == 0){
          // Sunday
          td.push(<td className="sunday">{i}</td>);
      }
      else{
          td.push(<td>{i}</td>);
      }
  }

  // space logic (next days)
  const nextDays = 7 - lastDayIndex - 1;
  for (let index = 1; index <= nextDays; index++) {
      td.push(<td className="disable">{index}</td>);
  }
  tr.push(<tr>{td}</tr>)
   return tr;
};


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
          <tbody>
            {calendar()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
