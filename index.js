const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.config.js");
const {
  addJob,
  getJobs,
  getJobById,
} = require("./controllers/job.controller.js");

const app = express();
initializeDatabase();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.post("/jobs", addJob);
app.get("/jobs", getJobs);

app.get("/jobs/:id", getJobById);

app.get("/", (req, res) => {
  return res.send("Job Posting App Backend is listening...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
