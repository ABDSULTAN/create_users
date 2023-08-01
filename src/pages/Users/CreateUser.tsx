import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import InputBox from "../../components/InputBox/InputBox";

interface userData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface createUserProps {
  onCreateUser: (newUser: userData) => void;
}

const CreateUser: React.FC<createUserProps> = ({ onCreateUser }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [userDetailsError, setUserDetailsError] = useState({
    isFirstNameError: false,
    firstNameErrorMsg: "",
    isLastNameError: false,
    lastNameErrorMsg: "",
    isEmailError: false,
    emailErrorMsg: "",
    isPhoneNumberError: false,
    phoneNumberErrorMsg: "",
  });

  // validation for user email address
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // user form validation on change event
  const userFormValidation = (name: string, value: string) => {
    if (name === "firstName" && value.length === 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isFirstNameError: true,
        firstNameErrorMsg: "Please enter your first name",
      }));
    }
    if (name === "firstName" && value.length !== 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isFirstNameError: false,
        firstNameErrorMsg: "",
      }));
    }

    if (name === "lastName" && value.length === 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isLastNameError: true,
        lastNameErrorMsg: "Please enter your last name",
      }));
    }
    if (name === "lastName" && value.length !== 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isLastNameError: false,
        lastNameErrorMsg: "",
      }));
    }

    if (name === "email" && value.length === 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isEmailError: true,
        emailErrorMsg: "Please enter your email address",
      }));
    }
    if (name === "email" && value.length !== 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isEmailError: false,
        emailErrorMsg: "",
      }));
    }

    if (name === "phoneNumber" && value.length === 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isPhoneNumberError: true,
        phoneNumberErrorMsg: "Please enter your phone number",
      }));
    }
    if (name === "phoneNumber" && value.length !== 0) {
      setUserDetailsError((oldData) => ({
        ...oldData,
        isPhoneNumberError: false,
        phoneNumberErrorMsg: "",
      }));
    }
  };

  // handle user form change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserDetails((oldData) => ({
      ...oldData,
      [name]: value,
    }));

    userFormValidation(name, value);
  };

  // submit user form
  const submitUserData = () => {
    let isValid = true;
    if (userDetails.firstName.length === 0) {
      isValid = false;
      setUserDetailsError((oldData) => ({
        ...oldData,
        isFirstNameError: true,
        firstNameErrorMsg: "Please enter your first name",
      }));
    }
    if (userDetails.lastName.length === 0) {
      isValid = false;
      setUserDetailsError((oldData) => ({
        ...oldData,
        isLastNameError: true,
        lastNameErrorMsg: "Please enter your last name",
      }));
    }
    if (userDetails.email.length === 0) {
      isValid = false;
      setUserDetailsError((oldData) => ({
        ...oldData,
        isEmailError: true,
        emailErrorMsg: "Please enter your email address",
      }));
    }
    if (userDetails.email.length > 0 && !isValidEmail(userDetails.email)) {
      isValid = false;
      setUserDetailsError((oldData) => ({
        ...oldData,
        isEmailError: true,
        emailErrorMsg: "Please enter your correct email address",
      }));
    }
    if (userDetails.phoneNumber.length !== 10) {
      isValid = false;
      setUserDetailsError((oldData) => ({
        ...oldData,
        isPhoneNumberError: true,
        phoneNumberErrorMsg: "Please enter your correct phone number",
      }));
    }

    if (isValid) {
      const data: userData = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber,
      };

      onCreateUser(data);
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <>
      <Box sx={{ p: 10 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Create User
        </Typography>

        <InputBox
          name="firstName"
          heading="First Name"
          placeholder="Enter your first name"
          type="text"
          onChange={handleChange}
          value={userDetails.firstName}
          error={userDetailsError.isFirstNameError}
          errorMsg={userDetailsError.firstNameErrorMsg}
        />

        <InputBox
          name="lastName"
          heading="Last Name"
          placeholder="Enter your last name"
          type="text"
          onChange={handleChange}
          value={userDetails.lastName}
          error={userDetailsError.isLastNameError}
          errorMsg={userDetailsError.lastNameErrorMsg}
        />

        <InputBox
          name="email"
          heading="Email Address"
          placeholder="Enter your email"
          type="text"
          onChange={handleChange}
          value={userDetails.email}
          error={userDetailsError.isEmailError}
          errorMsg={userDetailsError.emailErrorMsg}
        />

        <InputBox
          name="phoneNumber"
          heading="Phone Number"
          placeholder="Enter your phone number"
          type="number"
          onChange={handleChange}
          value={userDetails.phoneNumber}
          error={userDetailsError.isPhoneNumberError}
          errorMsg={userDetailsError.phoneNumberErrorMsg}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 6, borderRadius: "10px", height: "45px" }}
          onClick={submitUserData}
        >
          Create
        </Button>
      </Box>
    </>
  );
};
export default CreateUser;
