import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

const router = Router();

router.get("/", auth, requireRole("admin"), (req, res) => {
  res.json({ message: "Admin users list" });
});

export default router;
