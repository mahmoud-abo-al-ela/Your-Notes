import {
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from "../controller/notesController.js";
import express from "express";

const router = express.Router();

router.route("/createNote").post(createNote);
router.route("/getNote").get(getNote);
router.route("/updateNote/:id").patch(updateNote);
router.route("/deleteNote/:id").delete(deleteNote);

export default router;
