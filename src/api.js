import axios from "axios"

let api = null

const inicioApi = () => {
  if (api) {
    return api
  }
  return (api = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  }))
}

const get = url =>
  inicioApi().get(url)

export const getPolos = () => {
  const url = `/Polos`

  return get(url)
    .then(result => {
      return result
    })
}