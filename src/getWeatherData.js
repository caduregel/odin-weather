import { extractWeatherData } from "./extractWeatherData"

const key = '9915c10ff5094143910145711241905'
const baseURL = 'https://api.weatherapi.com/v1'

export const getWeatherData = async (location) => {
    try {
        const requestURL = `${baseURL}/forecast.json?key=${key}&q=${location}&days=7`
        const response = await fetch(requestURL, { mode: "cors"})
        const result = await response.json()
        console.log(requestURL)
        const data = extractWeatherData(result)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}   