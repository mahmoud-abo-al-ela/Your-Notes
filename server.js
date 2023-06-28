import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import notesRouter from "./routes/notesRoutes.js";
import langRouter from "./routes/langRoutes.js";
import morgan from "morgan";

const app = express();
dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/language", langRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (err) {
    console.error(err);
  }
};

start();
