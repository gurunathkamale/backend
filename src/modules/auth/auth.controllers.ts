

import { Response, NextFunction } from "express";
import * as service from "./auth.services";
import { AuthRequest } from "../../types/auth";

export const register = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await service.register(req.body);
    res.status(201).json({ id: user._id.toString(),name: user.name, email: user.email  });
  } catch (e) {
    next(e);
  }
};

export const login = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const { token, user } = await service.login(email, password);
console.log("JWT TOKEN:", token); 
  
    return res.status(200).json({
      token,   
      user,
    });
  } catch (error) {
    next(error);
  }
  
};




