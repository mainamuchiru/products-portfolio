import ProjectCard from "./ProjectCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProjectList({ projects, onDelete, isSearching }) {
  if (!isSearching && projects.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Typography sx={{ color: "text.secondary", fontSize: "16px" }}>
          Add a new project
        </Typography>
      </Box>
    );
  }

  if (isSearching && projects.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Typography sx={{ color: "text.secondary", fontSize: "16px" }}>
          No projects found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3, alignItems: "center" }}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
    </Box>
  );
}

export default ProjectList;