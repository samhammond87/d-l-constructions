import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

export default function Timesheets() {
  const { store } = useGlobalState();
  const { timesheets } = store;


  const list = timesheets.map((timesheet) => {
    return (
      <tr className="active-row" key={timesheet.id}>
        <td>
          <Link
            style={{ color: "#009879" }}
            to={`/portal/${timesheet.id}`}
          >
            {timesheet.name}
          </Link>
        </td>
        <td>{timesheet.date}</td>
        <td>{timesheet.start_time}</td>
        <td>{timesheet.end_time}</td>
        <td>{timesheet.total_hours}</td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      </>
  );
}
