/* istanbul ignore file */
import { getAccessToken } from '../get-access-token'
import http from '../http.util'
import { ApiProps } from '../types/http.interface'

export abstract class ApiHTTP {
  private dependencies = { http, getAccessToken }

  async get({ url, variables }: ApiProps): Promise<any> {
    const { http } = this.dependencies
    const r: any = await http.get({ url, params: variables })
    return r
  }

  async post({ url, variables, contentType }: ApiProps): Promise<any> {
    const { http } = this.dependencies
    const r: any = await http.post({
      url,
      body: variables,
      params: { contentType }
    })
    return r
  }

  placeholder() {
    const { getAccessToken } = this.dependencies
    console.log(getAccessToken())
  }
}
