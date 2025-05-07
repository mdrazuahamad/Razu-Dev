// utils/validateProjects.js

// ❌ Throw error if duplicate project IDs found
export const validateProjectIDs = (projects) => {
  const seen = new Set();
  const duplicates = [];

  projects.forEach((proj) => {
    if (seen.has(proj.id)) {
      duplicates.push(proj.id);
    } else {
      seen.add(proj.id);
    }
  });

  if (duplicates.length > 0) {
    throw new Error(`🚫 Duplicate project IDs found: ${duplicates.join(", ")}`);
  } else {
    console.log("✅ All project IDs are unique.");
  }
};

// ✅ Remove duplicates and ensure all IDs are unique
export const generateUniqueProjects = (projects) => {
  const seen = new Set();
  const ids = new Set();

  const uniqueProjects = projects.filter((proj) => {
    if (seen.has(proj.id)) return false;
    seen.add(proj.id);
    return true;
  });

  return uniqueProjects.map((proj, index) => {
    let id = proj.id || `${proj.title.replace(/\s+/g, "-").toLowerCase()}-${index}`;
    while (ids.has(id)) {
      id += "-" + Math.floor(Math.random() * 1000);
    }
    ids.add(id);
    return { ...proj, id };
  });
};
