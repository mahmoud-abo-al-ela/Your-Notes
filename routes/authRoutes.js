import { register, login, updateUser } from "../controller/authController.js";
import express from "express";
import authenticatedUser from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticatedUser, updateUser);

export default router;
