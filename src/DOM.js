export const createForecast = (data) => {
    const daysContainer = document.querySelector('#days')
    daysContainer.innerHTML = ''
    const DOMitems = data.map((item) => {
        const day = document.createElement('div')
        day.classList.add('day')

        // Which day of the week it is
        const weekday = document.createElement('p')
        weekday.classList.add('weekday')
        weekday.textContent = item.day_of_week


        // Logic for displaying rain percentage
        const rainChance = document.createElement('div')
        rainChance.classList.add('rain-chance')
        if (item.will_it_rain == 1) {
            const rainSymbol = document.createElement("img")
            rainSymbol.setAttribute('src', 'https://www.iconpacks.net/icons/2/free-raindrop-icon-1580-thumb.png')

            const rainPercentage = document.createElement('p')
            rainPercentage.textContent = item.chance_of_rain + '%'

            rainChance.appendChild(rainSymbol)
            rainChance.appendChild(rainPercentage)
        } else {
            const sunSymbol = document.createElement('img')
            sunSymbol.setAttribute('src', 'https://www.svgheart.com/wp-content/uploads/2020/07/sun-summer-free-svg-cutting-file.png')
            rainChance.appendChild(sunSymbol)
        }

        const minMax = document.createElement('div')
        minMax.classList.add('min-max-temp')

        const minTemp = document.createElement('p')
        minTemp.textContent = item.mintemp_c + '°'
        const maxTemp = document.createElement('p')
        maxTemp.textContent = item.maxtemp_c + '°'

        minMax.appendChild(minTemp)
        minMax.appendChild(maxTemp)

        day.appendChild(weekday)
        day.appendChild(rainChance)
        day.appendChild(minMax)

        return day
    })

    DOMitems.forEach(element => {
        daysContainer.appendChild(element)
    })
}

export const createCurrent = (data) => {
    const country = document.querySelector('#country')
    country.textContent = data.location.country

    const temp = document.querySelector('#current-temp')
    temp.textContent = data.current.temperature.celsius + '°'

    const condition = document.querySelector('#condition')
    condition.textContent = data.current.condition1
}