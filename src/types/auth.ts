// import { Request } from "express";
// import { JwtPayload } from "jsonwebtoken";

// export interface AuthRequest extends Request {
//   user?: string | JwtPayload;
// }
import { Request } from "express";

export interface AuthRequest extends Request {
  body: {
    name?: string;
    email: string;
    password: string;
  };
}


// import { Request } from "express";

// export interface AuthRequest extends Request {
//   body: {
//     name?: string;
//     email: string;
//     password: string;
//   };
// }

