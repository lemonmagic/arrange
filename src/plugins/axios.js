import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://ceshi.frp.aiuyo.com',
  })
  return instance(config)
}