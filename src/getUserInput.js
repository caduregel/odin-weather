import { createCurrent, createForecast } from './DOM'
import { getWeatherData } from './getWeatherData'

export const getUserInput = async () => {
    const form = document.querySelector('#location-input')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const input = document.querySelector('#input').value.toString()
        // console.log(input)
        const forecastData = await getWeatherData(input)
        createForecast(forecastData.forecast)
        createCurrent(forecastData)
    })
}
