

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../types/auth";




export const uploadImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Upload successful",
      url: (req.file as any).path,
      public_id: (req.file as any).filename,
    });
  } catch (error) {
    next(error);
  }
};
