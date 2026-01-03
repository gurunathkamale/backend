
import { Request } from "express";

export interface AuthRequest extends Request {
  body: {
    name?: string;
    email: string;
    password: string;
  };
}



