export function extractWeatherData(weatherData, forecastDays) {
    // Extract current temperature and other data
    const currentTempC = weatherData.current.temp_c;
    const currentTempF = weatherData.current.temp_f;
    const isDay = weatherData.current.is_day;
    const currentCondition = weatherData.current.condition.text;

    // Helper function to convert date to day of the week
    function getDayOfWeek(dateStr) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(dateStr);
        return daysOfWeek[date.getUTCDay()];
    }

    // Extract forecast data
    const forecast = weatherData.forecast.forecastday.slice(0, forecastDays).map(day => ({
        day_of_week: getDayOfWeek(day.date),
        date: day.date,
        maxtemp_c: day.day.maxtemp_c,
        maxtemp_f: day.day.maxtemp_f,
        mintemp_c: day.day.mintemp_c,
        mintemp_f: day.day.mintemp_f,
        will_it_rain: day.day.daily_will_it_rain,
        chance_of_rain: day.day.daily_chance_of_rain
    }));

    // Extract location data
    const city = weatherData.location.name;
    const country = weatherData.location.country;

    // Create the result object
    const result = {
        location: {
            city: city,
            country: country
        },
        current: {
            temperature: {
                celsius: currentTempC,
                fahrenheit: currentTempF
            },
            is_day: isDay,
            condition: currentCondition
        },
        forecast: forecast
    };

    return result;
}