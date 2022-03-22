import { Container, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const History = (props) => {
  const { list } = props;

  const [selectedLocation, setSelectedLocation] = useState("None");

  const setItemToDisplay = (event) => {
    setSelectedLocation(event.target.value || "None");
  };
  return (
    <Container>
      <InputLabel id="history-selector">History</InputLabel>
      <Select
        style={{ width: "auto" }}
        label="History"
        onChange={setItemToDisplay}
        value={selectedLocation}
      >
        {list.length === 0 && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {list?.map((item, index) => {
          return (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </Container>
  );
};

export default History;
