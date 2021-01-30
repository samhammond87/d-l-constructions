import constructionAPI from '../config/api';


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
	const response = await constructionAPI.put(`/api/timesheets/${data.id}`, {nam: data.name,})
	return response.data
	
}