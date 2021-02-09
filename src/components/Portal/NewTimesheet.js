import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createTimesheet,
  getTimesheet,
  updateTimesheet,
} from "../../axios/timesheetServices";
import { useGlobalState } from "../../utils/stateContext";
import "./NewTimesheetElements.css";


// create new timesheet form

export default function NewTimesheet() {
// sets the initial state of the form when the add timesheet page is first loaded
  const initialFormState = {
    name: "",
    date: "",
    start_time: "",
    end_time: "",
    total_hours: "",
    comments: "",
  };

 // calls use state (which returns an array with 2 elements [first is list of the formState that is set above, and the 2nd is a function)
  const [formState, setFormState] = useState(initialFormState);
  
// useGlobalState gives us the value of stateContext in '../../utils/stateContext.js'
// dispatch pass's the reducer action.
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
          processed: timesheet.processed,
        });
      });
    }
  }, [id]);

  function handleChange(e) {
    setFormState({ // update whats currently in our form data state
      ...formState,
      [e.target.name]: e.target.value,
    }); // key/value pair: target name key for target value

    // if the checkbox called processed value is changed
    if (e.target.name === "processed") {
      if (formState.processed == false) {
        setFormState(Object.assign({}, formState, { processed: true })); // if the formState of the boolean was false, assign a true value to that boolean
      } else {
        setFormState(Object.assign({}, formState, { processed: false })); // and vice-verca
      }
    } else {
      setFormState(
        Object.assign({}, formState, { [e.target.name]: e.target.value })
      );
    }
    console.log(e.target.value);
  }

  // When the user clicks the submit button a put request is sent to the server to update the timesheet with the correct id
  function handleClick(e) {
    e.preventDefault();
    if (id) {
      updateTimesheet({ id: id, ...formState }) // updateTimesheet is the request to the server found in '../../axios/timesheetServices' if a timesheet id is found
        .then(() => {
          dispatch({ type: "updateTimesheet", data: { id: id, ...formState } }); // "updateTimesheet" is the reducer case statement found in '../../utils/stateReducer'
          history.push(`/portal/${id}`);
          console.log(formState);
        })
        .catch((err) => {
          setFormState({ errorMessage: err.message });
        });
    } else {
      createTimesheet({ ...formState })
        .then((timesheet) => {
          dispatch({ type: "addTimesheet", data: timesheet }); // "addTimesheet" is the request to the server found in '../../axios/timesheetServices' if a timesheet id ISN'T found
          history.push("/portal");
        })
        .catch((err) => {
          setFormState(
            Object.assign({}, formState, { errorMessage: err.message }) // attach the jsx error below to the form if incorrect details are received.  Object.assign and formState keeps the correct fields populated
          );
        });
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
                onChange={handleChange} // updates the state when the field gets updated by the user
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

          <div className="labelContainer">
            {loggedInUser === "Xinyu" && (
              <div>
                <label className="labelText">Processed</label>
                <input
                  type="checkbox"
                  name="processed"
                  value={!formState.processed}
                  onChange={handleChange}
                  className="input"
                  id="processed"
                ></input>
              </div>
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
          {/* attach the jsx error below to the form if incorrect details are received.  Object.assign and formState keeps the correct fields populated */}
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
