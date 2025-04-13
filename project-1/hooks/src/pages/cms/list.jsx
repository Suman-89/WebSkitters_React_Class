import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../navbar/navbar";
import AxiosInstance from "../../api/axios/axios";
import { endPoints } from "../../api/endpoints/endpoint";
import { toast } from "react-toastify";

export default function List() {
  const [list, setList] = React.useState({});

  React.useEffect(() => {
    async function showData() {
      try {
        const list = await AxiosInstance.post(endPoints.cms.list);
        console.log(list.data.data, "list");
        setList(list.data.data);
        // toast(list.data.message);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    showData();
  }, []);
  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Created at</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>User ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(list) &&
              list.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.user_id}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
