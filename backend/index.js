import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";
import colors from "colors";
import { arcjectMiddleware } from "./middlewares/arcjet.middleware.js";

const app = express();
app.use(express.json());

app.use(clerkMiddleware());
app.use(arcjectMiddleware);

app.get("/", (req, res) => {
  res.send("Hola from server");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error: ", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on PORT: ${ENV.PORT}`.bgMagenta);
    });
  } catch (error) {
    console.error("Failed to start server: ", error.message);
    process.exit(1);
  }
};

startServer();
