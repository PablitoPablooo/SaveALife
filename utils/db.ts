import { Database } from 'better-sqlite3'

export const GetDatabaseInstance = (name: string) => {
  const sqlite3 = require('better-sqlite3')
  return new sqlite3(`${name}.db`, { verbose: console.log }) as Database
}