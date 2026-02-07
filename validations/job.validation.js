function validateJobData(body) {
  const { title, companyName, salary, jobType, description, qualifications } =
    body;

  if (!title || typeof title !== "string") {
    return "Title is required and must be a string";
  }

  if (!companyName || typeof companyName !== "string") {
    return "Company name is required and must be a string";
  }

  if (!salary || typeof salary !== "number") {
    return "Salary is required and must be a number";
  }

  if (!jobType || typeof jobType !== "string") {
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

module.exports = { validateJobData };
