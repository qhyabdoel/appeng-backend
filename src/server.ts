import express from "express";
import cors from "cors";
import users from "./routes/users";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", users);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
