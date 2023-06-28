import {
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from "../controller/notesController.js";
import express from "express";
import authenticatedUser from "../middleware/auth.js";
const router = express.Router();

router.route("/createNote").post(authenticatedUser, createNote);
router.route("/getNote").get(authenticatedUser, getNote);
router.route("/updateNote/:id").patch(updateNote);
router.route("/deleteNote/:id").delete(deleteNote);

export default router;
