import jwt from "jsonwebtoken"
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "../config/env";



export const signAccessToken = (payload: object): string => {
  if (!JWT_ACCESS_SECRET) {
    throw new Error("JWT_ACCESS_SECRET is not defined");
  }

  return jwt.sign(payload, JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });
};


export const refreshAccessToken = (payload : object)=>{
jwt.sign(payload, JWT_REFRESH_SECRET,{
    expiresIn: "7d"
})
}

