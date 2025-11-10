import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

// public routes
router.get("/posts/:postId", getComments);

// protected routes
router.post("/post/:postId", protectRoute, createComment);
router.post("/:commentId", protectRoute, deleteComment);

export default router;
