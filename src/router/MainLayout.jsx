import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Root() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default Root;
