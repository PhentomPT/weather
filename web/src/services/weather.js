import http from './http'

export default {
  async today (user, password) {
    const response = await http.post('/weather/today', { user, password })

    if (response.status !== 200) {
      return false
    }

    return response
  },
  async forecast () {
    const response = await http.get(`/weather/forecast`)

    if (response.status !== 200) {
      return false
    }

    const list = response.data.content.list
    console.log(list)
    const temps = {
      startTime: list[0].main.dt,
      data: []
    }
    for (let index = 0; index < list.length; index++) {
      temps.data.push(list[index].main.temp)
    }

    return temps
  }
}
