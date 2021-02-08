import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Moment from "react-moment";
import { getTimesheet } from "../../axios/timesheetServices";
import { Button, Panel } from "./Styled";
import { useGlobalState } from "../../utils/stateContext";
import { deleteTimesheet } from "../../axios/timesheetServices";
import "./TimesheetDetailsElements.css";

// show timesheet component

export default function TimesheetDetails() {
  const [timesheet, setTimesheet] = useState(null);
  const { id } = useParams();
  let history = useHistory();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  useEffect(() => {
    getTimesheet(id)
      .then((timesheet) => setTimesheet(timesheet))
      .catch((error) => console.log(error));
  }, [id]);

  if (!timesheet) return null;
  function handleDelete() {
    deleteTimesheet(id).then(() => {
      dispatch({ type: "deleteTimesheet", data: id });
      history.push("/portal");
    });
  }

  return (
    <>
      <table class="rTable">
        <thead>
          <th>Posted On</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
          <th>Comments</th>
          <th>Submitted By</th>
        </thead>
        <tbody>
          <tr className="active-row">
            <td data-label="Submitted On">
              <Moment format="DD-MM-YYYY">{timesheet.posted}</Moment>
            </td>
            <td data-label="Start Time">{timesheet.start_time}</td>
            <td data-label="End Time">{timesheet.end_time}</td>
            <td data-label="Total Hours">{timesheet.total_hours}</td>
            <td data-label="Comments">{"" ? "N/A" : timesheet.comments}</td>
            <td data-label="Submitted By">{timesheet.name}</td>
          </tr>
        </tbody>
      </table>

      <div>
        {loggedInUser === timesheet.name && ( // && is used for hiding and showing in jsx
          <Panel>
            <Button
              className="showButtons"
              onClick={() => history.push(`/portal/update/${id}`)}
            >
              Update
            </Button>
            <Button className="showButtons" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              className="showButtons"
              onClick={() => history.push(`/portal`)}
            >
              Back
            </Button>
          </Panel>
        )}
        {loggedInUser === "Xinyu" && (
          <Panel>
            <Button
              className="showButtons"
              onClick={() => history.push(`/portal/update/${id}`)}
            >
              Update
            </Button>
            <Button className="showButtons" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              className="showButtons"
              onClick={() => history.push(`/portal`)}
            >
              Back
            </Button>
          </Panel>
        )}
      </div>
    </>
  );
}
