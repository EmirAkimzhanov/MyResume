import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ handleOpen, setOpen, open }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#d8d8d8", color: "gray" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "2.5vmin", ml: 3 }}
          >
            Emir Akimzhanov
          </Typography>
          <Button
            color="inherit"
            sx={{ fontSize: "2vmin", mx: 2, ml: 3 }}
            href="#box1Id"
          >
            HOME
          </Button>
          <Button
            sx={{ fontSize: "2vmin", mx: 2 }}
            color="inherit"
            href="#box2Id"
          >
            WORKS
          </Button>
          <Button
            sx={{ fontSize: "2vmin", mx: 2 }}
            color="inherit"
            href="#box3Id"
          >
            SKILLS
          </Button>

          <Button
            sx={{ fontSize: "2vmin", mx: 2 }}
            color="inherit"
            onClick={() => setOpen(!open)}
          >
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
