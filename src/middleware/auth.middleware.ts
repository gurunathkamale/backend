// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// export default (req: Request, res: Response, next: NextFunction) => {
//   const header = req.headers.authorization;

//   if (!header?.startsWith("Bearer "))
//     return res.status(401).json({ message: "Unauthorized" });

//   const token = header.split(" ")[1];

//   try {
//     req.user = jwt.verify(token, process.env.JWT_SECRET!);
//     next();
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };


import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
// import { AuthRequest } from "../types/auth";

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    );

    req.body = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
