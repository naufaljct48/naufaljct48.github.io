import express from "express";
import { handler } from "./api/chat";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", handler);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", err);
    res.status(500).json({ error: "Something broke!" });
  }
);

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
