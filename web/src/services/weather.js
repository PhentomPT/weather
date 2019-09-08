import http from './http'

export default {
  async today (cityName) {
    const response = await http.get(`/weather/today/${cityName}`)

    if (response.status !== 200) {
      return false
    }

    return response.data.content
  },
  async forecast (cityName, cityCode = null) {
    let findBy = cityName

    if (cityCode) {
      findBy += `/${cityCode}`
    }

    const response = await http.get(`/weather/forecast/${findBy}`)

    if (response.status !== 200) {
      return false
    }

    const list = response.data.content.list
    const data = {
      startTime: list[0].main.dt,
      temp: [],
      wind: [],
      humidity: []
    }

    for (let index = 0; index < list.length; index++) {
      const timestamp = list[index].dt * 1000
      data.temp.push([timestamp, list[index].main.temp])
      data.wind.push([timestamp, list[index].wind.speed])
      data.humidity.push([timestamp, list[index].main.humidity])
    }

    return data
  }
}
