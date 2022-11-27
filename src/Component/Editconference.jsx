import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getConferences } from "../Service/ConferenceService";

const initialValue = {
  name: "",
  date: "",
  duration: "",
  location: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const Editconference = () => {
  const [Conference, setConference] = useState(initialValue);
  const { name, date, duration, location } = Conference;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadConferenceDetails();
  }, []);

  const loadConferenceDetails = async () => {
    const response = await getConferences(id);
    setConference(response.data);
  };

  // const editConferenceDetails = async () => {
  //   const response = await editconference(id, Conference);
  //   navigate("/all");
  // };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setConference({ ...Conference, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Duration</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="duration"
          value={duration}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Location</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="location"
          value={location}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          // onClick={() => editConferenceDetails()}
        >
          Edit Conference
        </Button>
      </FormControl>
    </Container>
  );
};

export default Editconference;
