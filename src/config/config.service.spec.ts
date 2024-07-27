import ConfigStoreService from '../config/config.service'

jest.mock('dotenv', () => ({
  config: () => {
    process.env.PORT = '3000'
    process.env.IS_LOCAL = 'true'
    process.env.IS_DEVELOPMENT = 'true'
    process.env.IS_PRODUCTION = 'false'
    process.env.HOSTNAME = 'localhost'
    process.env.LOCAL_DATABASE_PATH = 'local-db'
    process.env.CLIENT_ID = 'client-id'
    process.env.CLIENT_SECRET = 'client-secret'
    process.env.ACCESS_TOKEN = 'access-token'
    process.env.SQLITE_PATH = 'sqlite-path'
    process.env.DATABASE_URL = 'database-url'
  }
}))

beforeEach(() => {
  const env = process.env
})

describe('getConfig', () => {
  it('should return the entire config object if no key is provided', () => {
    const config = ConfigStoreService.getConfig()
    expect(config).toStrictEqual({
      PORT: expect.any(Number),
      IS_LOCAL: expect.any(Boolean),
      IS_DEVELOPMENT: expect.any(Boolean),
      IS_PRODUCTION: expect.any(Boolean),
      HOSTNAME: expect.any(String),
      LOCAL_DATABASE_PATH: expect.any(String),
      CLIENT_ID: expect.any(String),
      CLIENT_SECRET: expect.any(String),
      ACCESS_TOKEN: expect.any(String),
      SQLITE_PATH: expect.any(String),
      DATABASE_URL: expect.any(String)
    })
  })

  it('should return the value of the specified key in the config object', () => {
    const port = ConfigStoreService.getConfig('PORT')
    expect(port).toEqual(3000)

    const isLocal = ConfigStoreService.getConfig('IS_LOCAL')
    expect(isLocal).toEqual(true)

    const hostname = ConfigStoreService.getConfig('HOSTNAME')
    expect(hostname).toEqual('localhost')
  })
})
