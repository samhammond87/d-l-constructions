import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import Moment from "react-moment";
import "./Timesheets.css";

export default function Timesheets() {
  const [searchEntry, setSearchEntry] = useState("");
  const { store } = useGlobalState();
  const { timesheets } = store;
  const { loggedInUser } = store;

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
          <td>
            <Moment format="DD/MM/YYYY">{timesheet.date}</Moment>
          </td>
          <td data-label="Start Time">{timesheet.start_time}</td>
          <td data-label="End Time">{timesheet.end_time}</td>
          <td data-label="Total Hours">{timesheet.total_hours}</td>
          <td data-label="Processed">{timesheet.processed ? "✅" : "❌"}</td>
          <br />
          <br />
        </tr>
      );
    });

  return (
    <>
      <div
        className="searchContainer"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        {loggedInUser ? (
          ""
        ) : (
          <h3 style={{ marginBottom: "20px" }}>
            <em>This portal is for company employees only!</em>
          </h3>
        )}

        {loggedInUser ? (
          <div>
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
        ) : (
          ""
        )}
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
      {loggedInUser ? (
        <table class="rTable">
          <thead>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
            <th>Status</th>
          </thead>
          <tbody>{list2}</tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
}
