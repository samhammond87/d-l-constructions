import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { Button, Label, Input, CommentTextInput } from "./Styled";
import {
  createTimesheet,
  getTimesheet,
  updateTimesheet,
} from "./services/timesheetServices";
import { useGlobalState } from "./utils/stateContext";
import "./NewTimesheetElements.css";

export default function NewTimesheet() {
  const initialFormState = {
    name: "",
    date: "",
    start_time: "",
    end_time: "",
    total_hours: "",
    comments: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  let history = useHistory();
  let { id } = useParams();
  const { dispatch } = useGlobalState();

  useEffect(() => {
    if (id) {
      getTimesheet(id).then((timesheet) => {
        console.log(timesheet);
        setFormState({
          name: timesheet.name,
          date: timesheet.date,
          start_time: timesheet.start_time,
          end_time: timesheet.end_time,
          total_hours: timesheet.total_hours,
          comments: timesheet.comments,
        });
      });
    }
  }, [id]);

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }
  function handleClick(event) {
    event.preventDefault();
    if (id) {
      updateTimesheet({ id: id, ...formState }).then(() => {
        dispatch({ type: "updateTimesheet", data: { id: id, ...formState } });
        history.push(`/portal/${id}`);
      });
    } else {
      createTimesheet({ ...formState })
        .then((timesheet) => {
          dispatch({ type: "addTimesheet", data: timesheet });
          history.push("/portal");
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <>
      <div className="formContainer">
        <h3>New Timesheet</h3>
        <form>
          <div className="contact-form">
            <div className="input-fields">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="input"
                placeholder="Your Name"
              />
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                className="input"
              />
              <input
                type="text"
                name="start_time"
                value={formState.start_time}
                onChange={handleChange}
                className="input"
                placeholder="Enter Start Time"
              />
              <input
                type="text"
                name="end_time"
                value={formState.end_time}
                onChange={handleChange}
                className="input"
                placeholder="Enter End Time"
              />
              <input
                type="integer"
                name="total_hours"
                value={formState.total_hours}
                onChange={handleChange}
                className="input"
                placeholder="Enter Total Hours"
              />
            </div>
          </div>

          <div className="msg">
            <textarea
              placeholder="Enter any comments here..."
              name="comments"
              value={formState.comments}
              onChange={handleChange}
              cols="5"
            />
          </div>

          <div className="buttonContainer">
            <input
              type="submit"
              value={id ? "Update" : "Create"}
              onClick={handleClick}
              className="btn"
            />
          </div>
        </form>
      </div>
    </>
  );
}
