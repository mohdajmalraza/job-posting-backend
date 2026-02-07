const jobModel = require("../models/job.model.js");

async function createjob(data) {
  return await jobModel.create(data);
}

async function fetchJobs() {
  return await jobModel.find();
}

async function fetchJobById(id) {
  return await jobModel.findById(id);
}

module.exports = { createjob, fetchJobs, fetchJobById };
