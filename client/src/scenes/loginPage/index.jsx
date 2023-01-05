import {
  Box,
  Typography, 
  useTheme, 
  useMediaQuery
} from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <Box 
        width="100%" 
        backgroundColor={theme.palette.alt} 
        p="1rem 6%" 
        textAlign="center" 
      >
      <Typography fontWeight="bold" fontSize="28px" color="primary">
        BenWebMedia
      </Typography>
      </Box>

      <Box width={isNonMobileScreens ? "50%" : "93%"}
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={theme.palette.alt} 
      >
        <Typography fontWeight="500" variant="h3" sx={{mb: "1.5rem"}}>
          Welcome to the social media BenWebMedia app! 
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage