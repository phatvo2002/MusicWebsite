import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Grid2, TextField } from '@mui/material';
import CustomImageUpload from '../../../../../Components/CustomUploadImage/CusTomUploadImages';
import axios from 'axios';
const ModalAddChuDe = ({ openModal, handleClose ,setLoading }) => {
    ModalAddChuDe.propTypes = {
        openModal: PropTypes.bool.isRequired,  
        handleClose: PropTypes.func.isRequired, 
        setLoading : PropTypes.func.isRequired
      };
      const [base64String, setBase64String] = useState("");
      const [imageDataBasic, setImageDataBasic] = useState("");
      const [obj , setObj] = useState({
        tenChude : "",
        file :"",
     })
     const resetForm = () => {
        setObj({
          tenChude : "",
        })    // Reset the text field
        setBase64String('');       // Clear the image preview
        setImageDataBasic(null);   // Reset any other state related to image
      };
      // handle change modal
      const handleChange = (name) => (event) => {
        setObj({ ...obj, [name]: event.target.value });
      }
      const handleImageConvert = (base64String) => {
        setBase64String(base64String);
        toast.success("Thêm ảnh thành công", {
            toastId: "alert-add-image",
          });
      };

      const handleCloseModal = () => {
        resetForm();               
        handleClose()    
      };


      const handelSave = async () => {
        if (!obj?.tenChude || !imageDataBasic) {
            toast.warning("Vui lòng nhập đầy đủ dữ liệu", {
                toastId: "alert-add-save-warning",
              });
            return;
        }
    
        const formData = new FormData();
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        formData.append("TenChuDe", obj?.tenChude);
        formData.append("File", imageDataBasic);
            const response = await axios.post("https://localhost:7280/api/ChuDe/addchude", formData, config);
    
            if (response.status === 200) {
                toast.success("Thêm mới thành công", {
                    toastId: "alert-add-save-success",
                  });
               setLoading(true)
                handleClose(); 
            } else {
                toast.warn("đã có lỗi khi xảy ra", {
                    toastId: "alert-add-save-warrn",
                  });
            }
       
    };
  return (
    <Dialog
    open={openModal}
    keepMounted
   // onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Thêm mới chủ đề"}</DialogTitle>
    <DialogContent >
      <DialogContentText id="alert-dialog-slide-description">
        <Grid2 container sx={{width:"500px"}} spacing={2} >
            <Grid2 sx={{width:"500px"}}>
              <TextField id="standard-basic" onChange={handleChange("tenChude")} label="Tên chủ đề" variant="standard" fullWidth />
            </Grid2>
            <Grid2 > 
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
      <Button onClick={handleCloseModal}>Đóng</Button>
      <Button onClick={()=> handelSave()} >Lưu</Button>
    </DialogActions>
  </Dialog>
  )
}

export default ModalAddChuDe