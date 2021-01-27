import constructionAPI from '../config/api';


function transformTimesheet(timesheet) {

	return {
		name: timesheet.name, 
		date: timesheet.date, 
		start_time: timesheet.start_time, 
		end_time: timesheet.end_time, 
		total_hours: timesheet.total_hours,
		comments: timesheet.comments,
		posted: timesheet.created_at

	}

}

export async function getTimesheets() {
	const response = await constructionAPI.get('/api/timesheets')
	return response.data
	// return Promise.resolve(timesheets)
}


export async function getTimesheet(id) {
	const response = await constructionAPI.get(`/api/timesheets/${id}`)
	return response.data
}

// export async function getRandomTimesheet() {

// }

export async function createTimesheet(timesheet) {
	return timesheet
}

export async function deleteTimesheet(id) {
	console.log("ran")
	return id
}

export async function updateTimesheet(timesheet) {
	return timesheet
	
}