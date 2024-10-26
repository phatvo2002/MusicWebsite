import { Box, Button, Grid2, InputAdornment, TextField, Typography } from "@mui/material"
import logo from "../../../assets/images/logo.png"
import background from "../../../assets/images/background.jpg"
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

const Login = () => {
    const styleContainer ={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      
      }
      const styleBox = {
        boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        width:"500px",
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        padding:"50px"
      }
      return (
        <Grid2 sx={styleContainer}>
            <Box sx={styleBox}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
                     <img style={{ width: "50%" }} src={logo} alt="Logo" />
                </div>
                 <Typography align="center" variant="h5" sx={{padding:3}}>Đăng nhập</Typography>
                
           <TextField
            id="input-with-icon-textfield"
            label="Email"
            fullWidth
            sx={{marginTop:5}}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
             variant="filled"
          />   
          <TextField
            id="input-with-icon-textfield"
            label="Mật khẩu"
            type="password"
            fullWidth
            sx={{marginTop:5}}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsIcon />
                  </InputAdornment>
                ),
              },
            }}
             variant="filled"
          />
          <Button fullWidth sx={{marginTop:5 ,backgroundColor:"#f010ae"}}>
               Đăng nhập
          </Button>
            </Box>
        </Grid2>
      )
}

export default Login