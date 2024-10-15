import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CustomImageUpload from '../../../../../Components/CustomUploadImage/CusTomUploadImages';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Grid2, TextField } from '@mui/material';
import axios from 'axios';
const ModalAddTheLoai = ({ openModal, handleClose }) => {
      ModalAddTheLoai.propTypes = {
        openModal: PropTypes.bool.isRequired,  
        handleClose: PropTypes.func.isRequired, 
      };
      const [base64String, setBase64String] = useState("");
      const [imageDataBasic, setImageDataBasic] = useState("");
      const [obj , setObj] = useState({
        tenTheLoai : "",
        file :"",
     })
      const handleChange = (name) => (event) => {
        setObj({ ...obj, [name]: event.target.value });
      }
      const handleImageConvert = (base64String) => {
        setBase64String(base64String);
        toastr.success("Thêm ảnh thành công");
      };

      const handelSave = async () => {
        if (!obj?.tenTheLoai || !imageDataBasic) {
            toastr.error("Vui lòng nhập đầy đủ dữ liệu");
            return;
        }
    
        const formData = new FormData();
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        formData.append("tenTheLoai", obj?.tenTheLoai);
        formData.append("file", imageDataBasic);
    
       
            const response = await axios.post("https://localhost:7280/api/TheLoai/AddTheLoai", formData, config);
            console.log(response);
    
            if (response.status === 200) {
                toastr.success("Thêm thành công");
                handleClose(); // Đóng modal khi thành công
            } else {
                toastr.error("Có lỗi xảy ra");
            }
       
    };
    
  return (
    <Dialog
    open={openModal}
    keepMounted
   // onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Thêm mới thể loại nhạc"}</DialogTitle>
    <DialogContent >
      <DialogContentText id="alert-dialog-slide-description">
        <Grid2 container spacing={2} >
            <Grid2 size={12}>
              <TextField id="standard-basic" onChange={handleChange("tenTheLoai")} label="Tên thể loại" variant="standard" />
            </Grid2>
            <Grid2 size={12}> 
                <CustomImageUpload
             onImageConvert={handleImageConvert}
             // removeImage={removeImage}
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
        </Grid2>
         
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Đóng</Button>
      <Button onClick={handelSave}>Lưu</Button>
    </DialogActions>
  </Dialog>
  )
}

export default ModalAddTheLoai