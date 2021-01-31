import constructionAPI from '../config/api';


export async function getTimesheets() {
	const response = await constructionAPI.get('/api/timesheets')
	return response.data
}


export async function getTimesheet(id) {
	const response = await constructionAPI.get(`/api/timesheets/${id}`)
	return response.data
}


export async function createTimesheet(timesheet) {
	const response = await constructionAPI.post('/api/timesheets', timesheet)
	return response.data
}

export async function deleteTimesheet(id) {
	const response = await constructionAPI.delete(`/api/timesheets/${id}`)
	return response.data
}

export async function updateTimesheet(data) {
	const response = await constructionAPI.put(`/api/timesheets/${data.id}`, {name: data.name,})
	return response.data
	
}