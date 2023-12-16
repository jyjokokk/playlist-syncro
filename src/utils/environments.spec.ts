import { isDevelopment, isLocal, isProduction } from './environments.util'

const originalEnv = process.env

beforeEach(() => {
  jest.resetModules()
  process.env = {
    ...originalEnv,
    IS_PRODUCTION: 'true',
    IS_DEVELOPMENT: 'false',
    IS_LOCAL: 'false'
  }
})

describe('isDevelopment', () => {
  it('returns false if not in dev environment', () => {
    const r = isDevelopment()
    expect(r).toBe(false)
  })
  it('returns true if in dev environment', () => {
    jest.resetModules()
    process.env = {
      IS_DEVELOPMENT: 'true'
    }
    const r = isDevelopment()
    expect(r).toBe(true)
  })
})

describe('isLocal', () => {
  it('returns false if not in local environment', () => {
    const r = isDevelopment()
    expect(r).toBe(false)
  })
  it('returns true if in local environment', () => {
    jest.resetModules()
    process.env = {
      IS_LOCAL: 'true'
    }
    const r = isLocal()
    expect(r).toBe(true)
  })
})

describe('isProduction', () => {
  it('returns true if in production environment', () => {
    const r = isProduction()
    expect(r).toBe(true)
  })
  it('returns false if not in production environment', () => {
    jest.resetModules()
    process.env = {
      IS_PRODUCTION: 'false'
    }
    const r = isProduction()
    expect(r).toBe(false)
  })
})
