const express = require("express");
const { initializeDatabase } = require("./db/db.config.js");
const { addJob } = require("./controllers/job.controller.js");

const app = express();
initializeDatabase();

app.use(express.json());

app.post("/jobs", addJob);

app.get("/", (req, res) => {
  return res.send("Job Posting App Backend is listening...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
