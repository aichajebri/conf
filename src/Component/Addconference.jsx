import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
// import { AddConference } from "../Service/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  conferencename: "",
  date: "",
  duration: "",
  location: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddConference = () => {
  const [conference, setconference] = useState(initialValue);
  const { conferencename, date, duration, location } = conference;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setconference({ ...conference, [e.target.name]: e.target.value });
  };

  //   const AddConferencedetails = async () => {
  //     await AddConference(conference);
  //     navigate("/all");
  //   };

  return (
    <Container>
      <Typography variant="h4">Add Conference</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Conference Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="conferencename"
          value={conferencename}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="date"
          value={date}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Duration</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="duration"
          value={duration}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Location</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="location"
          value={location}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => AddConference()}
        >
          Add Conference
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddConference;

// import React, { useState } from "react";
// import { InputGroup, FormControl, Button, Modal, Form } from "react-bootstrap";

// function Addconference({ conferencename, setconferencename }) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [newName, setNewname] = React.useState("");
//   const [newDate, setNewDate] = React.useState("");
//   const [newDuration, setNewDuration] = React.useState("");
//   const [newLocation, setNewLocation] = React.useState("");

//   const NewConference = () => {
//     let NewConference = {
//       id: Math.random(),
//       name: `${newName}`,
//       date: `${newDate}`,
//       duration: `${newDuration}`,
//       location: `${newLocation}`,
//     };

//     setconferencename([...conferencename, newName]);
//     handleClose();
//   };

//   return (
//     <>
//       <Button
//         variant="outline-dark"
//         onClick={handleShow}
//         style={{ marginLeft: "100px", width: "400px", alignContent: "center" }}
//       >
//         Add New Conference
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Conference</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <InputGroup className="mb-3">
//             <InputGroup.Text id="inputGroup-sizing-default">
//               Conference name
//             </InputGroup.Text>
//             <FormControl
//               aria-label="Default"
//               aria-describedby="inputGroup-sizing-default"
//               onChange={(e) => setNewname(e.target.value)}
//             />
//           </InputGroup>
//           <br />

//           <InputGroup className="mb-3">
//             <InputGroup.Text id="inputGroup-sizing-default">
//               Date
//             </InputGroup.Text>
//             <FormControl
//               aria-label="Default"
//               aria-describedby="inputGroup-sizing-default"
//               onChange={(e) => setNewDate(e.target.value)}
//             />
//           </InputGroup>
//           <br />

//           <InputGroup className="mb-3">
//             <InputGroup.Text id="inputGroup-sizing-default">
//               Duration
//             </InputGroup.Text>
//             <FormControl
//               aria-label="Default"
//               aria-describedby="inputGroup-sizing-default"
//               onChange={(e) => setNewDuration(e.target.value)}
//             />
//           </InputGroup>
//           <br />

//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Location</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               onChange={(e) => setNewLocation(e.target.value)}
//             />
//           </Form.Group>
//         </Modal.Body>

//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button> */}
//           <Button variant="primary" onClick={NewConference}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Addconference;
