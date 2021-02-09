import constructionAPI from '../config/api'

// HTTP requests to the server for User Data


export async function signUp(data) {
	const response = await constructionAPI.post('/api/auth/sign_up', data)
	return response.data

}
export async function signIn(data) {
	const response = await constructionAPI.post('/api/auth/sign_in', data)
	return response.data
}
export async function signOut() {
	sessionStorage.clear()
	return "Logged out"
}

