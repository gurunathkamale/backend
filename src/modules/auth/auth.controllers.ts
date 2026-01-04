




import { Response, NextFunction } from "express";
import * as service from "./auth.services";
import { AuthRequest } from "../../types/auth";


//   REGISTER

export const register = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await service.register(req.body);

    res.status(201).json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * LOGIN
 */
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

    //  Store token in HTTP-only cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    //  DO NOT send token in response body
    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    next(error);
  }
};


// import { Request, Response } from "express";

export const logout = (_req: AuthRequest, res: Response) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    sameSite: "lax",
    secure: false
  });

  return res.status(200).json({
    message: "Logged out successfully",
  });
};

