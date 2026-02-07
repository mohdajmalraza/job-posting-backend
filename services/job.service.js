const jobModel = require("../models/job.model.js");

async function createjob(data) {
  return await jobModel.create(data);
}

async function fetchJobs() {
  return await jobModel.find();
}

module.exports = { createjob, fetchJobs };
