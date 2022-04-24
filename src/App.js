import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import { CATEGORIES } from "./db";
function App() {
  const [query, setQuery] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box>
      <br />
      <Typography variant="h3" gutterBottom component="div" align="center">
        Atlan Query Excuter
      </Typography>
      <br />
      <Box
        sx={{ minWidth: 120, display: "flex", justifyContent: "space-evenly" }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Query</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={query}
            label="Query"
            minWidth="50px"
            onChange={handleChange}
          >
            <MenuItem value={10}>SELECT * FROM CATEGORIES</MenuItem>
            <MenuItem value={20}>SELECT description FROM CATEGORIES</MenuItem>
            <MenuItem value={30}>SELECT categoryName FROM CATEGORIES</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            setOutput(query);
          }}
          sx={{ margin: "5px" }}
          variant="contained"
        >
          Run
        </Button>
      </Box>
      <br />

      <Box>
        <Typography variant="h4" gutterBottom component="div">
          OutPut
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {output === 10 ? (
                  <>
                    <TableCell align="center">categoryID</TableCell>
                    <TableCell align="center">categoryName</TableCell>
                    <TableCell align="center">description</TableCell>
                  </>
                ) : (
                  <>
                    {output === 20 ? (
                      <>
                        <TableCell align="center">description</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell align="center">categoryName</TableCell>
                      </>
                    )}
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {CATEGORIES.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {output === 10 ? (
                    <>
                      <TableCell align="center">{row.categoryID}</TableCell>
                      <TableCell align="center">{row.categoryName}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                    </>
                  ) : (
                    <>
                      {output === 20 ? (
                        <>
                          <TableCell align="center">
                            {row.description}
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell align="center">
                            {row.categoryName}
                          </TableCell>
                        </>
                      )}
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default App;
