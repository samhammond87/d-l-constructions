import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createTimesheet,
  getTimesheet,
  updateTimesheet,
} from "../../axios/timesheetServices";
import { useGlobalState } from "../../utils/stateContext";
import "./NewTimesheetElements.css";
import { Button, Panel } from "./Styled";

// create new timesheet form

export default function NewTimesheet() {
  const initialFormState = {
    name: "",
    date: "",
    start_time: "",
    end_time: "",
    total_hours: "",
    comments: ""
  };
  // const [processed, setProcessed] = useState({});
  const [processed, setProcessed] = useState({
    processed: false,
  });

  const [formState, setFormState] = useState(initialFormState);
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  let history = useHistory();
  let { id } = useParams();



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
          processed: timesheet.processed
        });
      });
    }
  }, [id]);

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      // [e.target.processed]: !e.target.checked
    });
    // console.log(e.target.checked)
    // console.log("processed", formState.processed)
    // console.log(e.target.value)
  

  if (e.target.name === 'processed') {
    if (processed.processed == false) {
      setProcessed(Object.assign({}, processed, { processed: true }));
    } else {
      setProcessed(Object.assign({}, processed, { processed: false }));
    }
  } else {
    setProcessed(
      Object.assign({}, processed, { [e.target.name]: e.target.value })
    );
  }
  console.log(e.target.value)

};

  function handleClick(e) {
    e.preventDefault();
    if (id) {
      updateTimesheet({ id: id, ...formState })
        .then(() => {
          dispatch({ type: "updateTimesheet", data: { id: id, ...formState } });
          history.push(`/portal/${id}`);
        })
        .catch((err) => {
          setFormState({ errorMessage: err.message });
        });
    } else {
      createTimesheet({ ...formState })
        .then((timesheet) => {
          dispatch({ type: "addTimesheet", data: timesheet });
          history.push("/portal");
        })
        .catch(err => { 
          setFormState(Object.assign({}, formState, { errorMessage: err.message }));
        })
    }
  }
  return (
    <>
      <div className="formContainer">
        <h3 className="formHeader">New Timesheet</h3>
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
                required
              />
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                className="input"
                required
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
              cols="3"
            />
          </div>
          <div>
          {loggedInUser === "Xinyu" && (
            <input
              type="checkbox"
              name="processed"
              value={processed.processed}
              onChange={handleChange}
              className="input"
            // onChange={props.handleChange}
            // value={props.daily_update.ate_food}
              id='processed'
              >
            </input>
          )}
          </div>

          <div className="buttonContainer">
            <input
              type="submit"
              onClick={handleClick}
              value={id ? "Update" : "Create"}
              className="btn"
              id="btn"
            />
          </div>
          <div className="buttonContainer">
            <input
              type="submit"
              onClick={() => history.push(`/portal`)}
              value="Back"
              className="btn"
              id="btn"
            />
          </div>
            <br />
              {formState.errorMessage && (
                   <p className="error" style={{ color: "white" }}>
                    {" "}
                     {"Oops! Please check your details and try again"}{" "}
                  </p>
                )}
        </form>
      </div>
    </>
  );
}
