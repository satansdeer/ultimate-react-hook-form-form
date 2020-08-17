import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
});

export const Result = () => {
  const styles = useStyles();
  const { data } = useData();

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          📋 Form Values
        </Typography>
        <TableContainer className={styles.root} component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell component="th" scope="row">
                    {entry[0]}
                  </TableCell>
                  <TableCell align="right">{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography component="h2" variant="h5">
          📦 Files
        </Typography>
        <List>
          {files?.map((f, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <InsertDriveFile />
              </ListItemIcon>
              <ListItemText primary={f.name} secondary={f.size} />
            </ListItem>
          ))}
        </List>
        <PrimaryButton>Submit</PrimaryButton>
        <Link to="/">Start over</Link>
      </MainContainer>
    </>
  );
};
