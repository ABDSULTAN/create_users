import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";

export interface user {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface userListPrpos {
  userListData: Array<user>;
}

const UserList: React.FC<userListPrpos> = ({ userListData }) => {
  const getFirstCharacter = (name: string) => {
    return name && name.charAt(0).toUpperCase();
  };

  return (
    <Box sx={{ p: 10 }}>
      <Typography variant="h5" sx={{ mb: 5, fontWeight: 600 }}>
        Users
      </Typography>
      {userListData?.map((userData, index) => {
        return (
          <Card
            key={index}
            sx={{
              p: 2,
              borderRadius: 0,
              boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              mb: 1.5,
            }}
          >
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <Box
                  sx={{
                    borderRadius: "50%",
                    background: "#F2F5FC",
                    height: " 50px",
                    width: " 50px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                      alignItems: "center",
                      color: "#0231C8",
                    }}
                  >
                    {getFirstCharacter(userData.firstName)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={9}>
                <Typography variant="h5" sx={{ color: "#000000" }}>
                  {userData.firstName + " " + userData.lastName}
                </Typography>
                <Typography variant="body2" sx={{ color: "#C6C6C6" }}>
                  {userData.email}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Box>
  );
};

export default UserList;
