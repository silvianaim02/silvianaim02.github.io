import { projectsData } from "../data/projects";

function getProjectById(id) {
  if (!projectsData) {
    return null;
  }
  const foundedProject = projectsData.find((item) => item.id == id);
  return foundedProject;
}

export { getProjectById };
