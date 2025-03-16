import { Router } from "express";
import {
  getAllStreaks,
  getStreakById,
  createStreak,
  updateStreak,
  deleteStreak,
} from "./streaksController";

const router = Router();

router.get("/", getAllStreaks);

router.get("/:id", getStreakById);

router.post("/", createStreak);

router.put("/:id", updateStreak);

router.delete("/:id", deleteStreak);

export default router;
