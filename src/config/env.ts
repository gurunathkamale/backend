import dotenv from "dotenv"

dotenv.config()

export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;
export const APP_URL= process.env.APP_URL as string

