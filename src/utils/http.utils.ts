import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../interfaces/api-response.interface'
import { CONTENT_TYPES, METHOD } from '../constants/request-options.const'

export class http {
  async get(url: string, options?: RequestInit): Promise<unknown> {
    const getInit = { method: METHOD.GET, ...options }
    const response = await fetch(url, getInit)
    if (!response.ok) {
      throw new Error(
        `Error! Request received response with status: ${response.status}`
      )
    }
    return response.json()
  }

  async post(
    url: string,
    data: unknown,
    options?: RequestInit
  ): Promise<unknown> {
    const headers = { 'Content-Type': CONTENT_TYPES.APPLICATION.JSON }
    const body = JSON.stringify(data)
    const postOptions = { method: METHOD.POST, body, headers, ...options }
    const response = await fetch(url, postOptions)
    if (!response.ok) {
      throw new Error(
        `Error! Request received response with status: ${response.status}`
      )
    }
    return response.json()
  }
}

export async function apiGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    // const url = `https://api.example.com/${endpoint}`;
    const url = `${endpoint}`
    const response: AxiosResponse<T> = await axios.get(url)

    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    console.error('Error in GET request', error)
    throw error
  }
}

export async function apiPost<T>(
  endpoint: string,
  data: unknown
): Promise<ApiResponse<T>> {
  try {
    const url = `${endpoint}`
    const response: AxiosResponse<T> = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    console.error('Error in GET request', error)
    throw error
  }
}
