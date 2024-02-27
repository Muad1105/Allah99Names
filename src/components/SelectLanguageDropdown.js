import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLanguageDropdown({ selctedLanguage }) {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    selctedLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 200, minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {language == 10 ? "ഭാഷ" : "Language"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>മലയാളം</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
