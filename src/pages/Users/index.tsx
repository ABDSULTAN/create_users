import React, { useState } from "react";
import { Grid, Divider } from "@mui/material";

import CreateUser from "./CreateUser";
import UserList from "./UserList";

interface userData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Users: React.FC = () => {
  const [userListData, setUserListData] = useState<userData[]>([]);

  const addNewUser = (user: userData) => {
    console.log(user);
    const tmpUser: userData[] = [...userListData];
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    tmpUser.push(userData);
    setUserListData(tmpUser);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid sm={6} item>
          <CreateUser onCreateUser={addNewUser} />
        </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#C0C0C0" }}
        />

        <Grid sm={5} item>
          <UserList userListData={userListData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
