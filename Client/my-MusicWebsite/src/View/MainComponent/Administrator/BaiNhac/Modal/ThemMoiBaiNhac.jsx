import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, IconButton, TextField, Typography } from '@mui/material'
import  { useState } from 'react'
import CustomImageUpload from '../../../../../Components/CustomUploadImage/CusTomUploadImages'
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import { DatePicker } from '@mui/x-date-pickers';
import { Label } from '@mui/icons-material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const ThemMoiBaiNhac = ({openModal,handleClose}) => {
    ThemMoiBaiNhac.propTypes = {
        openModal: PropTypes.bool.isRequired,  
        handleClose: PropTypes.func.isRequired,
     };
    const [base64String, setBase64String] = useState("");
    const [imageDataBasic, setImageDataBasic] = useState("");
    const handleImageConvert = (base64String) => {
        setBase64String(base64String);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thêm ảnh thành công",
          showConfirmButton: false,
          timer: 1500
        });
      };

      const handleCloseModal = () => {
        // resetForm();               
        handleClose()    
      };

  return (
    <Dialog
    open={openModal}
    keepMounted
   // onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Thêm mới bài nhạc"}</DialogTitle>
    <DialogContent >
    <DialogContentText id="alert-dialog-slide-description">
   <Grid2 container sx={{width:"500px"}}>
    <Grid2 sx={{width:"100%"}} >
      <TextField
        id="standard-basic"
        label="Tên bài nhạc"
        variant="outlined"
        fullWidth
       
      />
    </Grid2>
    <Grid2 sx={{width:"50%" , marginTop:2}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}> {/* Wrap your date picker inside this */}
     <DatePicker
      label="Ngày phát hành"
       renderInput={(params) => <TextField {...params} />}
      
     />
</LocalizationProvider>
    </Grid2>
    <Grid2 sx={{width:"50%" ,marginTop:2}} >
      <TextField
        id="standard-basic"
        label="Thời lượng"
        variant="outlined"
        fullWidth
      />
    </Grid2>
    <Grid2 sx={{width:"100%" ,marginTop:2}} >
      <TextField
        id="standard-basic"
        label="lời bài hát"
        variant="outlined"
        type=''
        fullWidth
      />
    </Grid2>
    <Grid2 sx={{width:"100%" ,marginTop:2}}>
    <Typography variant="h6">Banner</Typography>
    </Grid2>
    <Grid2  >
      <CustomImageUpload
        onImageConvert={handleImageConvert}
        setImageDataBasic={setImageDataBasic}
      />
      {base64String && (
        <div style={{ textAlign: "center" }}>
       
          <img
            src={base64String}
            alt="Converted"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      )}
    </Grid2>
    <Grid2 sx={{width:"100%" ,marginTop:2}}>
    <Typography variant="h6">Hình ảnh</Typography>
    </Grid2>
    <Grid2  >
      <CustomImageUpload
        onImageConvert={handleImageConvert}
        setImageDataBasic={setImageDataBasic}
      />
      {base64String && (
        <div style={{ textAlign: "center" }}>
       
          <img
            src={base64String}
            alt="Converted"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      )}
    </Grid2>

    <Grid2 sx={{width:"100%" ,marginTop:2}}>
          <label htmlFor="inputUploadFile" className="drop-container">
            <Typography variant="h6">Chọn file upload</Typography>
            <CloudUploadIcon color="primary" />
            <input
              id="inputUploadFile"
              type="file"
              multiple
           //   onChange={handleFileChange}
            />
          </label>
        </Grid2>
  </Grid2>
</DialogContentText>

    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseModal}>Đóng</Button>
      <Button>Lưu</Button>
    </DialogActions>
  </Dialog>
  )
}

export default ThemMoiBaiNhac