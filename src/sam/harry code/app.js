import React,{useState, useReducer, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getTimesheets} from './services/timesheetServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Timesheets from './components/Timesheets'
import Timesheet from './components/Timesheet'
import TimesheetDetails from './components/TimesheetDetails'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import NewTimesheet from './components/NewTimesheet'
import NewUser from './components/NewUser'
import {Header} from './components/Styled'



const App = () => {
	const initialState = {
		timesheets: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
	const [randomTimesheet, setRandomTimesheet] = useState(null)


	useEffect(() => {
		getTimesheets()
		.then((timesheets) => dispatch({type: 'setTimesheets', data: timesheets}))
		.catch((error) => console.log(error))
	},[])



	return (
		<div>
			<StateContext.Provider value={{store,dispatch}}>
				<Header> Timesheets </Header>
				<Router>
					<Nav setRandomTimesheet={setRandomTimesheet} />
					<Switch>
						<Route exact path='/timesheets' component={Timesheets}/> 
						<Route exact path='/timesheets/new' component={NewTimesheet} />
						<Route exact path='/timesheets/update/:id' component={NewTimesheet} />
						<Route path='/timesheets/:id' component={TimesheetDetails}/> 
						<Route path='/sign_in' component={SignIn}></Route>
						<Route path='/register' component={NewUser}></Route>
					</Switch>
				</Router>
			</StateContext.Provider>
		</div>
	)
}

export default App
