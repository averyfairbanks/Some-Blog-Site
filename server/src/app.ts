import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import { rateLimiter } from "./middleware/rateLimiter";

const app = express();

app.use(express.json());

app.use(rateLimiter, errorHandler);

// app.use("/api/items", itemRoutes);

export default app;
