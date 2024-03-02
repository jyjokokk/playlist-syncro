const dependencies = {
  fetch
}
type Depencies = typeof dependencies

export class HTTP {
  constructor(private dependencies: Depencies) {}

  async get(url: string): Promise<any> {
    const { fetch } = this.dependencies
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error occurred while making GET request:', error)
      throw error
    }
  }

  async post(url: string, body: Record<string, unknown>): Promise<any> {
    const { fetch } = this.dependencies
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error occurred while making POST request:', error)
      throw error
    }
  }
}

export default new HTTP(dependencies)
