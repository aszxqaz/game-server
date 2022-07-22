import { CorsOptions } from 'cors'
import { config } from 'dotenv'

config()

export const corsConfig: CorsOptions = {
  origin: process.env.NODE_ENV === "production" ? process.env.CLIENT_URL : process.env.LOCALHOST,
  credentials: true
}