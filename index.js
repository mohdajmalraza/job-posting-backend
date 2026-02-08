const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.config.js");
const {
  addJob,
  getJobs,
  getJobById,
  deleteJobById,
  searchJobsByTitle,
} = require("./controllers/job.controller.js");

const app = express();
initializeDatabase();

app.use(
  cors({ origin: "https://job-posting-app-eac.vercel.app", credentials: true }),
);
app.use(express.json());

app.post("/jobs", addJob);
app.get("/jobs", getJobs);

app.get("/jobs/search", searchJobsByTitle);
app.get("/jobs/:id", getJobById);

app.delete("/jobs/:id", deleteJobById);

app.get("/", (req, res) => {
  return res.send("Job Posting App Backend is listening...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
