import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getTimesheets } from "../../axios/timesheetServices";
import stateReducer from "../../utils/stateReducer";
import { StateContext } from "../../utils/stateContext";
import Timesheets from "./Timesheets";
import TimesheetDetails from "./TimesheetDetails";
import PortalNav from "./PortalNav";
import SignIn from "./SignIn";
import NewTimesheet from "./NewTimesheet";
import NewUser from "./NewUser";


// employee portal index page

const Portal = () => {

  // sets the initial state of the page when a user is not logged in
  const initialState = {
    timesheets: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: { token: sessionStorage.getItem("token") || null },
  };

  // Sets the data and action from '../../utils/stateReducer.js
   // store is the state object 
     // dispatch is a function that we call with an action object. 
  const [store, dispatch] = useReducer(stateReducer, initialState);
    // When we call dispatch, we pass it an action object with a particular type of data. And dispatch will call the reducer function with the current state and with that action


  // uses axios in '../../axios/timesheetServices' to make a GET request to the server
  // useEffect gets passed a function ( () => {} ) 
  useEffect(() => {
    getTimesheets()
      .then((timesheets) => {
        return timesheets;
      })
      .then((timesheets) =>
        dispatch({ type: "setTimesheets", data: timesheets }) // Reducer case statement
      )
      .catch(() => {
        dispatch({ type: "setTimesheets", data: [] }); // Reducer case statment
      });
  }, [store.auth.token]); // [store.auth.token] calls the hook every time the token changes state which refreshes the data

  return (
    <div>
    {/* the value in the StateContext.Provider is provided by the Reducer */}
      <StateContext.Provider value={{ store, dispatch }}>
        <Router>
          <PortalNav />
          <Switch>
            <Route exact path="/portal" component={Timesheets} />
            <Route exact path="/portal/new" component={NewTimesheet} />
            <Route exact path="/portal/update/:id" component={NewTimesheet} />
            <Route path="/portal/:id" component={TimesheetDetails} />
            <Route path="/sign_in" component={SignIn}></Route>
            <Route path="/register" component={NewUser}></Route>
          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  );
};

export default Portal;
