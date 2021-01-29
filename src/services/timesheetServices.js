import constructionAPI from '../config/api';


// function transformTimesheet(timesheet) {
// 	return {

// 		name: timesheet.name, 
// 		date: timesheet.date, 
// 		start_time: timesheet.start_time, 
// 		end_time: timesheet.end_time, 
// 		total_hours: timesheet.total_hours,
// 		comments: timesheet.comments,
// 		posted: timesheet.created_at

// 	}

// }

export async function getTimesheets() {
	const response = await constructionAPI.get('/api/timesheets')
	return response.data
	// return Promise.resolve(timesheets)
}


export async function getTimesheet(id) {
	const response = await constructionAPI.get(`/api/timesheets/${id}`)
	return response.data
}


export async function createTimesheet(timesheet) {
	const response = await constructionAPI.post('/api/timesheets', timesheet)
	// console.log(response)
	return response.data
}

export async function deleteTimesheet(id) {
	const response = await constructionAPI.delete(`/api/timesheets/${id}`)
	return response.data
}

export async function updateTimesheet(data) {
	const response = await constructionAPI.put(`/api/timesheets/${data.id}`, {body: data.name,})
	return response.data
	
}