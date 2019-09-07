import http from './http'

export default {
  async today (cityName) {
    const response = await http.get(`/weather/today/${cityName}`)

    if (response.status !== 200) {
      return false
    }

    console.log(response.data)

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
    const temps = {
      startTime: list[0].main.dt,
      data: []
    }

    console.log(list)
    for (let index = 0; index < list.length; index++) {
      temps.data.push(list[index].main.temp)
    }

    return temps
  }
}
