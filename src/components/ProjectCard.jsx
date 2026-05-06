import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ProjectCard({ project, onDelete }) {
  return (
    <Card
      sx={{
        width: "60%",
        mb: 3,
        borderRadius: 4,
        border: "1px solid rgba(233,69,96,0.25)",
        boxShadow: "0 4px 20px rgba(233,69,96,0.1), 0 1px 4px rgba(0,0,0,0.15)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            "0 12px 40px rgba(233,69,96,0.25), 0 4px 12px rgba(0,0,0,0.2)",
          border: "1px solid rgba(233,69,96,0.6)",
        },
      }}
    >
      {project.image && (
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            height: 350, 
            objectFit: "cover", 
            borderRadius: "16px 16px 0 0",
          }}
        />
      )}

      <CardContent sx={{ px: 3, pt: 2.5 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "40px", fontWeight: 700, lineHeight: 1.2 }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "20px", lineHeight: 1.6 }}
        >
          {project.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2.5 }}>
        <Button
          size="small"
          onClick={() => onDelete(project.id)}
          sx={{
            color: "#e94560",
            borderColor: "rgba(233,69,96,0.4)",
            border: "1px solid",
            borderRadius: 2,
            px: 2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(233,69,96,0.08)",
              borderColor: "#e94560",
            },
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
