import React, { useEffect, useState } from "react";
import AddUserModal from "../Components/AddUserModal";
import ReactTable from "../Components/Table";
import { Box } from "@chakra-ui/react";
import axios from "axios";

const UserPage = () => {

const [userData,setUserDate] = useState([])


  const columns = [
    {
      Header: "ID",
      accessor: "_id", // accessor is the "key" in the data
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "phoneNumber",
      accessor: "role",
    },
  ];

  useEffect(() => {
    async function getdata() {
      const userdata = await axios
        .get("http://localhost:5000/api/v1/users")
        .then((res) => {
            setUserDate(res.data.Users)
          console.log(res.data.Users);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    getdata();
  }, []);

  return (
    <Box>
      <AddUserModal />
      <ReactTable columns={columns} data={userData} />
    </Box>
  );
};

export default UserPage;
