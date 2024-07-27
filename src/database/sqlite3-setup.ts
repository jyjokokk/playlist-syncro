// TODO: Remove once ORM has been setup
import sqlite3 from 'sqlite3'
import configService from '../config/config.service'

const SQLITE_PATH = configService.getConfig().SQLITE_PATH

export const setupDatabase = async () => {
  const db = new sqlite3.Database(
    SQLITE_PATH,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        console.error(err.message)
      }
      console.log('Connected to the database.')
    }
  )
  db.serialize(() => {
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)')
  })
  return db
}
