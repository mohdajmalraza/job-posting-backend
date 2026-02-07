const jobModel = require("../models/job.model");

async function createjob(data) {
  return await jobModel.create(data);
}

module.exports = { createjob };
