import { Button, Grid } from "@mui/material";
import React from "react";

interface OperationButtonProps {
  selectedOperation: string;
  operation: string;
  selectOperation: (digit: string) => void;
}

export const OperationButton: React.FC<OperationButtonProps> = ({
  selectedOperation,
  operation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <Button
        fullWidth
        variant="outlined"
        style={{
          backgroundColor: "#abb8c3",
          border: "solid",
          borderColor:
            selectedOperation === operation
              ? "#000000"
              : "rgba(255, 241, 73, 0.5)",
        }}
        onClick={() => selectOperation(operation)}
      >
        {operation}
      </Button>
    </Grid>
  );
};
