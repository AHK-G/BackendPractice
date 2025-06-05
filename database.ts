import { Client } from 'pg'

export const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'car_api',
  user: 'arash',
  password: '1234',
})

