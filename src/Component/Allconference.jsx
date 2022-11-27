import { useState, useEffect } from "react";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getConferences } from "../Service/ConferenceService";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const Allconferences = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    async function getAllConferences() {
      let response = await getConferences();
      setConferences(response);
      return response;
    }
    getAllConferences();
  }, []);

  // const deleteConferenceData = async (id) => {
  //   await deleteConference(id);
  //   getAllConferences();
  // };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Conference Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Location</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {conferences.map((conferences) => (
          <TRow key={conferences.id}>
            <TableCell>{conferences.id}</TableCell>
            <TableCell>{conferences.conferencename}</TableCell>
            <TableCell>{conferences.date}</TableCell>
            <TableCell>{conferences.duration}</TableCell>
            <TableCell>{conferences.location}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${conferences.id}`}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                // onClick={() => deleteConferenceData(conferences.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Allconferences;
