import React from "react";

import { Container, TextField, InputAdornment } from "@mui/material";

import SearchIcon from "@material-ui/icons/Search";
const SearchBar = (props) => {
  const { onChange, inputProps } = props;
  return (
    <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          inputProps,
        }}
        id="outlined-search"
        label={props.placeholder}
        type="search"
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
