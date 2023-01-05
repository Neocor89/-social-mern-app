import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*
 : c.READ.u.d  */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/*
: c.r.UPDATE.d  */
router.patch("/:id/like", verifyToken, likePost);

export default router;
