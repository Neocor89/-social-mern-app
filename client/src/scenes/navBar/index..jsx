import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Box, 
  IconButton, 
  InputBase, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl, 
  useTheme, 
  useMediaQuery 
} from "@mui/material";

import { 
  Search, 
  Message, 
  DarkMode, 
  LightMode, 
  Notifications, 
  Help, 
  Menu, 
  Close 
} from "@mui/icons-material";

import { setMode, setLogout } from "state";
import FlexBetween from "../../components/FlexBetween";


//: useState
const NavBar = () => {
  return (
    <div>NavBar</div>
  )
}

export default NavBar