import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import "./Timesheets.css";

export default function Timesheets() {
  const [searchEntry, setSearchEntry] = useState("");
  const { store } = useGlobalState();
  const { timesheets } = store;

  // search function logic and map timesheets to display in browser
  // const list = timesheets
  //   .filter((entry) => {
  //     if (searchEntry === "") {
  //       return entry;
  //     } else if (entry.name.toLowerCase().includes(searchEntry.toLowerCase())) {
  //       return entry;
  //     } else if (entry.date.toLowerCase().includes(searchEntry.toLowerCase())) {
  //       return entry;
  //     }
  //   })
  //   .map((timesheet, index) => {
  //     return (
  //       <tr className="active-row" key={index}>
  //         <td>
  //           <Link
  //             style={{ color: "#009879" }}
  //             key={timesheet.id}
  //             to={`/portal/${timesheet.id}`}
  //           >
  //             {timesheet.name}
  //           </Link>
  //         </td>
  //         <td>{timesheet.date}</td>
  //         <td>{timesheet.start_time}</td>
  //         <td>{timesheet.end_time}</td>
  //         <td>{timesheet.total_hours}</td>
  //       </tr>
  //     );
  //   });

  const list2 = timesheets
    .filter((entry) => {
      if (searchEntry === "") {
        return entry;
      } else if (entry.name.toLowerCase().includes(searchEntry.toLowerCase())) {
        return entry;
      } else if (entry.date.toLowerCase().includes(searchEntry.toLowerCase())) {
        return entry;
      }
    })
    .map((timesheet, index) => {
      return (
        <tr className="active-row" key={index}>
          <td>
            <Link
              style={{ color: "black" }}
              key={timesheet.id}
              to={`/portal/${timesheet.id}`}
              data-label="Name"
              id="tName"
            >
              {timesheet.name}
            </Link>
          </td>
          <td data-label="Date">{timesheet.date}</td>
          <td data-label="Start Time">{timesheet.start_time}</td>
          <td data-label="End Time">{timesheet.end_time}</td>
          <td data-label="Total Hours">{timesheet.total_hours}</td>
        </tr>
      );
    });

  return (
    <>
      <div className="searchContainer" style={{ textAlign: "center" }}>
        <label className="searchLabel" style={{ marginRight: "20px" }}>
          Enter name or date:
        </label>
        <input
          type="text"
          placeholder="Search......"
          className="searchField"
          onChange={(event) => {
            setSearchEntry(event.target.value);
          }}
        />
      </div>
      {/* <table className="styled-table">
        <thead>
          <tr>
            <th data-label="name">Employee Name</th>
            <th data-label="date">Date</th>
            <th data-label="start">Start Time</th>
            <th data-label="end">End Time</th>
            <th data-label="total">Total Hours</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      <br />
      <br /> */}
      <table class="rTable">
        <thead>
          <th>Employee Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
        </thead>
        <tbody>{list2}</tbody>
      </table>
    </>
  );
}
