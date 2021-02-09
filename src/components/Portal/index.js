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
// import { Header } from "./Styled";

// employee portal index page

const Portal = () => {
  const initialState = {
    timesheets: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: { token: sessionStorage.getItem("token") || null },
  };

  const [store, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    getTimesheets()
      .then((timesheets) => {
        console.log(timesheets)
        return timesheets;
      })
      .then((timesheets) =>
        dispatch({ type: "setTimesheets", data: timesheets })
      )
      .catch((error) => {
        dispatch({ type: "setTimesheets", data: [] });
        console.log(error);
      });
  }, [store.auth.token]);

  return (
    <div>
      <StateContext.Provider value={{ store, dispatch }}>
        <Router>
          <PortalNav />
          {/* <Header> Employee Portal </Header> */}
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
