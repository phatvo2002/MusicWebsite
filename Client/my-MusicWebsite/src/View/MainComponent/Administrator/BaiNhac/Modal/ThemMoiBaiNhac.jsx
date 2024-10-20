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
import axios from 'axios';
const ThemMoiBaiNhac = ({openModal,handleClose}) => {
    ThemMoiBaiNhac.propTypes = {
        openModal: PropTypes.bool.isRequired,  
        handleClose: PropTypes.func.isRequired,
     };
    const [base64String, setBase64String] = useState("");
    const [base64StringBanner, setBase64StringBanner] = useState("");
    const [imageDataBasic, setImageDataBasic] = useState("");
    const [bannderDataBasic , setBannersDataBasic] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [files,setFiles] = useState("");
    const [obj , setObj] = useState({
      tenBaiNhac :"",
      ngayPhatHanh : "",
      duongDanHinhAnh :"",
      duongDanBanner :"",
      duongDanFileAmNhac:"",
      loiBaiHat :"",
      nhacSiId :"",
      theLoaiId :"",
      tamTrangId :"",
      chudeId :"",
      albumId :"",
    });
    //handle Changes values obj
    const handleChange = (name) => (event) => {
      setObj({ ...obj, [name]: event.target.value });
    }
    const handleDateChange = (field) => (newValue) => {
      // Convert the new date to the required format or just store it
      setSelectedDate(newValue);
      console.log(`${field} updated to`, newValue ? dayjs(newValue).format("YYYY-MM-DD") : "null");
    };
    const handleFileChange = (e) => {
      if (Array.from(e.target.files).some((arr) => arr?.size < 30000000)) {
        // Get the selected files
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thêm file thành công",
          showConfirmButton: false,
          timer: 1500
        });
        const selectedFiles = Array.from(e.target.files);
        setFiles([...files, ...selectedFiles]); 
        // if (handleFileSelect) {
        //   handleFileSelect([...files, ...selectedFiles]); 
        // }
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "File của bạn không được vượt quá 30MB",
          showConfirmButton: false,
          timer: 1500
        });
      }
    };

    const resetForm = () => {
      setObj({
        tenBaiNhac :"",
        ngayPhatHanh : "",
        duongDanHinhAnh :"",
        duongDanBanner :"",
        duongDanFileAmNhac:"",
        loiBaiHat :"",
        nhacSiId :"",
        theLoaiId :"",
        tamTrangId :"",
        chudeId :"",
        albumId :"",
      })    
      setBase64String('');     
      setBase64StringBanner('')
      setImageDataBasic(null);  
      setBannersDataBasic(null);
      setFiles(null);
    };
    //convert image
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
    //convert banner 
    const handleBannerConvert = (base64StringBanner) => {
      setBase64StringBanner(base64StringBanner);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thêm banner thành công",
        showConfirmButton: false,
        timer: 1500
      });
    };

      const handleCloseModal = () => {
         resetForm();               
        handleClose()    
      };

    const handelSubmit  = async () =>{
      // if (!obj?.tenBaiNhac || !obj.ngayPhatHanh || !obj.loiBaiHat || !obj.thoiLuong ||!imageDataBasic || !bannderDataBasic) {
      //   Swal.fire({
      //     position: "center",
      //     icon: "warning",
      //     title: "Vui lòng nhập đầy đủ dữ liệu",
      //     showConfirmButton: false,
      //   });
      //     return;
      // }
       const formData = new FormData();
       const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
        };
      formData.append("TenBaiNhac" , obj.tenBaiNhac)
      formData.append("NgayPhatHanh" , selectedDate)
      formData.append("ThoiLuong" , obj.thoiLuong)
      formData.append("LoiBaiHat" , obj.loiBaiHat)
      formData.append("DuongDanHinhAnh" , imageDataBasic)
      formData.append("DuongDanBanner" , bannderDataBasic)
      formData.append("DuongDanBanner" , bannderDataBasic)
      formData.append("DuongDanFileAmNhac" , files[0])

      const response = await axios.post("https://localhost:7280/api/BaiNhac/addbainhac", formData, config);
      if (response.status== 200)
      {
        if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thêm bài hát thành công",
            showConfirmButton: false,
            timer: 1500
          });
          //  setLoading(true)
            handleClose(); 
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Có lỗi đã xảy ra",
            showConfirmButton: false,
          });
        }
      }
    }

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
        onChange={handleChange("tenBaiNhac")}
      />
    </Grid2>
    <Grid2 sx={{width:"50%" , marginTop:2}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}> {/* Wrap your date picker inside this */}
     <DatePicker
      label="Ngày phát hành"
       renderInput={(params) => <TextField {...params} />}
       onChange={handleDateChange("ngayPhatHanh")}
     />
</LocalizationProvider>
    </Grid2>
    <Grid2 sx={{width:"50%" ,marginTop:2}} >
      <TextField
        id="standard-basic"
        label="Thời lượng"
        variant="outlined"
        fullWidth
        onChange={handleChange("thoiLuong")}
      />
    </Grid2>
    <Grid2 sx={{width:"100%" ,marginTop:2}} >
      <TextField
        id="standard-basic"
        label="lời bài hát"
        variant="outlined"
        type=''
        fullWidth
        onChange={handleChange("loiBaiHat")}
      />
    </Grid2>
    <Grid2 sx={{width:"100%" ,marginTop:2}}>
    <Typography variant="h6">Banner</Typography>
    </Grid2>
    <Grid2  >
      <CustomImageUpload
        onImageConvert={handleBannerConvert}
        setImageDataBasic={setBannersDataBasic}
      />
      {base64StringBanner && (
        <div style={{ textAlign: "center" }}>
       
          <img
            src={base64StringBanner}
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
              onChange={handleFileChange}
            />
          </label>
        </Grid2>
  </Grid2>
</DialogContentText>

    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseModal}>Đóng</Button>
      <Button onClick={()=> handelSubmit()}>Lưu</Button>
    </DialogActions>
  </Dialog>
  )
}

export default ThemMoiBaiNhac