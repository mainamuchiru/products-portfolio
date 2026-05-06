import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ value, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", px: 3, mb: 3, }}>
      <TextField
        placeholder="Search for projects..."
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{ width: "50%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "text.secondary" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;