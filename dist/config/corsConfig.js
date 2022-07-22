import { config } from 'dotenv';
config();
export const corsConfig = {
    origin: process.env.NODE_ENV === "production" ? process.env.CLIENT_URL : process.env.LOCALHOST,
    credentials: true
};
