import React, { useState } from 'react'
import "./view.css"
import Nextbutton from "../NextButton/Nextbutton";
import Prevbutton from '../PrevButton/Prevbutton';

export default function View() {
  const[date,setDate] = useState(new Date());
  
  var calendar = () => {
    const firstdayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();
    const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

    let tr = []
    let td = []
    
    // space logic (prev days)
    for (let j = firstdayIndex; j > 0; j--) {
      td.push(<td className="disable" key={"prev" + j}>{prevLastDay - j + 1}</td>);
    }

  // Loop logic (current days)
    let count = firstdayIndex - 1;
    for (let i = 1; i <= lastDay; i++) {
        count += 1;
        // row seperate
        if(count % 7 == 0){  
          tr.push(<tr key={"curr" + i}>{td}</tr>);
          td = [];
          count = 0;
        }
        // today
        if(i === new Date().getDate())
        {
            td.push(<td className="today" key={'curr' + i}>{i}</td>);
        }
        else if(count % 7 == 5){
          // friday
            td.push(<td className="friday" key={'curr' + i}>{i}</td>)
        }
        else if(count % 7 == 0){
            // Sunday
            td.push(<td className="sunday" key={'curr' + i}>{i}</td>);
        }
        else{
            td.push(<td key={'curr' + i}>{i}</td>);
        }
    }

    // space logic (next days)
    const nextDays = 7 - lastDayIndex - 1;
    for (let index = 1; index <= nextDays; index++) {
        td.push(<td className="disable" key={"next" + index}>{index}</td>);
    }
  tr.push(<tr key={"row"}>{td}</tr>)
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

  const handleNextDate = () => {
      setDate((newDate) => {
        newDate.setMonth(newDate.getMonth() + 1);
        return new Date(newDate);
      });
  }

  const handlePrevDate = () => {
      setDate((newDate) => {
        newDate.setMonth(newDate.getMonth() - 1);
        return new Date(newDate);
      });
  }
  return (
    <div>
      <div className="months">
        <h1>{months[c_month]}</h1>
        <Prevbutton onPrev={handlePrevDate}/>
        <p>{date.toDateString()}</p>
        <Nextbutton onNext={handleNextDate}/>
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
            {calendar(date)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
