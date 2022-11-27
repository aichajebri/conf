import React from "react";
import Post from "./Post";
function Showconference() {
  return (
    <div className="Home">
      <div className="posts">
        <Post img="https://www.incimages.com/uploaded_files/image/1920x1080/getty_532256991_186621.jpg" />
        <Post img="https://www.davidparrish.com/wp-content/uploads/2014/05/David-Parrish-EVCOM.jpg" />
        <Post img="https://s31606.pcdn.co/wp-content/uploads/2019/08/business-people-listening-to-the-speaker-at-a-conference-picture-id1039606566.jpg" />
      </div>
    </div>
  );
}

export default Showconference;

// import { useState, useEffect } from "react";

// import {
//   Table,
//   TableHead,
//   TableCell,
//   TableRow,
//   TableBody,
//   Button,
//   styled,
// } from "@mui/material";
// import { getUsers, deleteUser } from "../Service/api";
// import { Link } from "react-router-dom";

// const StyledTable = styled(Table)`
//   width: 90%;
//   margin: 50px 0 0 50px;
// `;

// const THead = styled(TableRow)`
//   & > th {
//     font-size: 20px;
//     background: #000000;
//     color: #ffffff;
//   }
// `;

// const TRow = styled(TableRow)`
//   & > td {
//     font-size: 18px;
//   }
// `;

// const AllUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const deleteUserData = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   };

//   const getAllUsers = async () => {
//     let response = await getUsers();
//     setUsers(response.data);
//   };

//   return (
//     <StyledTable>
//       <TableHead>
//         <THead>
//           <TableCell>Id</TableCell>
//           <TableCell>Conference Name</TableCell>
//           <TableCell>Date</TableCell>
//           <TableCell>Duration</TableCell>
//           <TableCell>Location</TableCell>
//           <TableCell></TableCell>
//         </THead>
//       </TableHead>
//       <TableBody>
//         {users.map((user) => (
//           <TRow key={user.id}>
//             <TableCell>{user.id}</TableCell>
//             <TableCell>{user.conferencename}</TableCell>
//             <TableCell>{user.date}</TableCell>
//             <TableCell>{user.duration}</TableCell>
//             <TableCell>{user.location}</TableCell>
//           </TRow>
//         ))}
//       </TableBody>
//     </StyledTable>
//   );
// };

// export default AllUsers;
