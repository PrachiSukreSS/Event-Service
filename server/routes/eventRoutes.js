// 📁 server/routes/eventRoutes.js
import express from "express";
import { getAllEvents, addEvent } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", addEvent);

export default router;
