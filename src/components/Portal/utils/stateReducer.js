export default function reducer(state, action) {
  switch (action.type) {
    case "setTimesheets": {
      return {
        ...state,
        timesheets: action.data,
      };
    }
    
    case "addTimesheet": {
      return {
        ...state,
        timesheets: [action.data, ...state.timesheets],
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
        (timesheet) => timesheet.id === action.data.id
      );
      const theRest = state.timesheets.filter(
        (timesheet) => timesheet.id !== action.data.id
      );
      const updatedTimesheet = Object.assign(timesheet, action.data);
      return {
        ...state,
        timesheets: [updatedTimesheet, ...theRest],
      };
    }
    default:
      return state;
  }
}
