export function getAPIBaseURL(): string {
	return "http://localhost:5035/api"
}

export function getProductsAPIBaseURL(): string {
	return `${getAPIBaseURL()}/Product`
}
export function getCategoryAPIBaseURL(): string {
	return `${getAPIBaseURL()}/Category`
}
