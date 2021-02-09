
//reducer calls a current state(state) and an action. A reducer function is a switch statement on action type. And in that switch statement we'll have a case statement for every action we want to perform
export default function reducer(state, action) {
  switch (action.type) {
    case "setTimesheets": {
      return {
        ...state, //...state destructures the current state which creates a copy of the current state object
        timesheets: action.data, // make a change to timesheets. action.data has the new state value 
      };
    } // we're always going to be returning a new state object. We want to include what is currently in state (setTimesheets)
    
    // repeat process for all cases
    case "addTimesheet": {
      return {
        ...state,
        timesheets: [action.data, ...state.timesheets], // action.data is the new timesheet in this case
      };
    }

    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }

    case "setToken": {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.data,
        },
      };
    }

    case "deleteTimesheet": {
      const updatedTimesheets = state.timesheets.filter((timesheet) => {
        return timesheet.id !== parseInt(action.data);
      });
      return {
        ...state,
        timesheets: updatedTimesheets,
      };
    }

    case "updateTimesheet": {
      const timesheet = state.timesheets.find(
        (timesheet) => timesheet.id == action.data.id
      );
      const theRest = state.timesheets.filter(
        (timesheet) => timesheet.id != action.data.id
      );
      const updatedTimesheet = Object.assign(timesheet, action.data);
      return {
        ...state,
        timesheets: [updatedTimesheet, ...theRest],
      };
    }
    // if nothing matches, return the current state (react wont update anything)
    default:
      return state;
  }
}
