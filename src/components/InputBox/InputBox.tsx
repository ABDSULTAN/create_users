import React from "react";
import { Box, Typography, TextField } from "@mui/material";

interface InputProps {
  name: string;
  heading: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean;
  errorMsg: string;
}

const InputBox: React.FC<InputProps> = ({
  name,
  heading,
  placeholder,
  type,
  onChange,
  value,
  error,
  errorMsg,
}) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 600, color: "#0231C8", mb: 1, mt: 2 }}>
        {heading}
      </Typography>

      <TextField
        fullWidth
        hiddenLabel={true}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        InputProps={{
          style: {
            borderColor: "#C6C6C6",
            borderRadius: "10px",
          },
        }}
      />
      {error && (
        <Typography variant="caption" sx={{ color: "red" }}>
          {errorMsg}
        </Typography>
      )}
    </Box>
  );
};

export default InputBox;
