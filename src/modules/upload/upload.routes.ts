import { Router } from "express";
import upload from "../../middleware/upload.middleware";
import { uploadImage } from "./upload.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.post(
  "/file",
  authMiddleware,        
  upload.single("file"),
  uploadImage
);

export default router;
