import { Router } from "express";
import type { Request, Response } from "express";
import axios from "axios";
import { transformUser } from "../utils/transformUser";

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const results = Number(req.query.results) || 10;
    const page = Number(req.query.page) || 1;

    const { data } = await axios.get("https://randomuser.me/api", {
      params: { results, page },
    });

    const users = data.results.map(transformUser);

    res.json({ count: users.length, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

export default router;
