import { Request, Response } from "express";

export function getAllStreaks(req: Request, res: Response) {
  res.send("List of streaks");
}

export function getStreakById(req: Request, res: Response) {
  res.send("Streak with id");
}

export function createStreak(req: Request, res: Response) {
  res.send("Streak created");
}

export function updateStreak(req: Request, res: Response) {
  res.send("Streak updated");
}

export function deleteStreak(req: Request, res: Response) {
  res.send("Streak deleted");
}
