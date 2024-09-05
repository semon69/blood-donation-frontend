// Updated BDInput Component
import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const BDInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          required={required}
          inputProps={{}} // Keep this open for all types
          onChange={(e) => {
            const target = e.target as HTMLInputElement;

            if (type === "file") {
              // Handle file input separately
              field.onChange(target.files);
              console.log("Selected files:", target.files); // Debug to ensure correct file capture
            } else {
              // Handle text input
              field.onChange(target.value);
            }
          }}
          value={type === "file" ? undefined : field.value}
        />
      )}
    />
  );
};

export default BDInput;
