import React,{useReducer, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getTimesheets} from '../../services/timesheetServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Timesheets from './Timesheets'
import TimesheetDetails from './TimesheetDetails'
import Nav from './Nav'
import SignIn from './SignIn'
import NewTimesheet from './NewTimesheet'
import NewUser from './NewUser'
import {Header} from './Styled'

const Portal= () => {
	const initialState = {
		timesheets: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)


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
					<Nav />
					<Switch>
						<Route exact path='/portal' component={Timesheets}/> 
						<Route exact path='/portal/new' component={NewTimesheet} />
						<Route exact path='/portal/update/:id' component={NewTimesheet} />
						<Route path='/portal/:id' component={TimesheetDetails}/> 
						<Route path='/sign_in' component={SignIn}></Route>
						<Route path='/register' component={NewUser}></Route>
					</Switch>
				</Router>
			</StateContext.Provider>
		</div>
	)
}


export default Portal;





