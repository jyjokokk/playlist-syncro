import ConfigStoreService from '../config/config.service'

describe('getConfig', () => {
  it('should return the entire config object if no key is provided', () => {
    const config = ConfigStoreService.getConfig()
    expect(config).toEqual({
      PORT: expect.any(Number),
      IS_LOCAL: expect.any(Boolean),
      IS_DEVELOPMENT: expect.any(Boolean),
      IS_PRODUCTION: expect.any(Boolean),
      HOSTNAME: expect.any(String),
      LOCAL_DATABASE_PATH: expect.any(String),
      CLIENT_ID: expect.any(String),
      CLIENT_SECRET: expect.any(String),
      ACCESS_TOKEN: expect.any(String)
    })
  })

  it('should return the value of the specified key in the config object', () => {
    const port = ConfigStoreService.getConfig('PORT')
    expect(port).toEqual(expect.any(Number))

    const isLocal = ConfigStoreService.getConfig('IS_LOCAL')
    expect(isLocal).toEqual(expect.any(Boolean))

    // Add more test cases for other keys in the config object
  })
})
