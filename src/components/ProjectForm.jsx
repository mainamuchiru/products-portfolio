import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProjectForm({
  title,
  description,
  error,
  onTitleChange,
  image,
  onImageChange,
  onDescriptionChange,
  onAdd,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 4,
        border: "1px solid rgba(233,69,96,0.3)",
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(233,69,96,0.08)",
        backgroundColor: "#fff",
        width:"70",
        mx: "auto",
        mb: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={onTitleChange}
          sx={{ width: "60%" }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={onDescriptionChange}
          multiline
          rows={3}
          sx={{ width: "60%" }}
        />
      </Box>

      {/* Image upload */}
      <Box>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={onImageChange}
          style={{ display: "none" }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={() => document.getElementById("image-upload").click()}
            sx={{
              py: 1.2,
              textTransform: "none",
              width: "30%",
              borderColor: "rgba(233,69,96,0.4)",
              color: "#e94560",
              "&:hover": {
                borderColor: "#e94560",
                backgroundColor: "rgba(233,69,96,0.05)",
              },
            }}
          >
            {image ? "Change Image" : "Upload Image"}
          </Button>
        </Box>

        {image && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{ mt: 1, borderRadius: 2, overflow: "hidden", width: "80%" }}
            >
              <img
                src={image}
                alt="preview"
                style={{
                  width: "30%",
                  maxHeight: 140,
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {error && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "#e94560", fontSize: "14px" }}>
            {error}
          </Typography>
        </Box>
      )}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={onAdd}
          sx={{
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            width: "30%",
            backgroundColor: "#e94560",
            boxShadow: "0 4px 14px rgba(233,69,96,0.35)",
            "&:hover": {
              backgroundColor: "#c23152",
              boxShadow: "0 6px 20px rgba(233,69,96,0.5)",
            },
          }}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectForm;
