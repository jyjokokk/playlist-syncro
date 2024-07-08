const dependencies = {
  fetch
}
type Depencies = typeof dependencies
type ReturnJSON = Record<string | number, unknown>

export class HTTP {
  constructor(private dependencies: Depencies) {}

  async get(url: string, init?: RequestInit): Promise<ReturnJSON> {
    const { fetch } = this.dependencies
    try {
      const response = await fetch(url, init)
      const data = await response.json()
      return data as Promise<ReturnJSON>
    } catch (error) {
      console.error('Error occurred while making GET request:', error)
      throw error
    }
  }

  async post(url: string, body?: Record<string, unknown>): Promise<ReturnJSON> {
    const { fetch } = this.dependencies
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      return await response.json()
    } catch (error) {
      console.error('Error occurred while making POST request:', error)
      throw error
    }
  }
}

export default new HTTP(dependencies)
