const mongoose = require("mongoose");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function validateJobData(body) {
  const {
    title,
    company,
    location,
    salary,
    type,
    description,
    qualifications,
  } = body;

  if (!title || typeof title !== "string") {
    return "Title is required and must be a string";
  }

  if (!company || typeof company !== "string") {
    return "Company name is required and must be a string";
  }

  if (!salary || typeof salary !== "number") {
    return "Salary is required and must be a number";
  }

  if (!location || typeof location !== "string") {
    return "Location is required and must be a string";
  }

  if (!type || typeof type !== "string") {
    return "Job type is must be one of these Full-time (On-site), Part-time (On-site), Full-time (Remote) and Part-time (Remote)";
  }

  if (description && typeof description !== "string") {
    return "Description must be a string";
  }

  if (!qualifications || typeof qualifications !== "string") {
    return "Qualifications is required and must be a string";
  }

  return null;
}

function validateJobId(params) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return "Job id must be a valid object ID";
  }

  return null;
}

function validateJobDelete(params) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return "Job id must be a valid object ID";
  }

  return null;
}

function validateJobSearch(queryParam) {
  const query = queryParam.query;

  if (!query || typeof query !== "string") {
    return "Search query is required and must be a string";
  }

  return null;
}

module.exports = {
  validateJobData,
  validateJobId,
  validateJobDelete,
  validateJobSearch,
};
