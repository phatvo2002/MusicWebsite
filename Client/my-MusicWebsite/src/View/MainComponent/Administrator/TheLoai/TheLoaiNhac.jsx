import React, { useState } from 'react'
import { Grid2, IconButton } from '@mui/material'
import ModalAddTheLoai from './Modal/ModalAddTheLoai'
const TheLoaiNhac = () => {
  const [openModalTheLoainhac , setOpenModalTheLoaiNhac] = useState(false)

  const handelOpenModalAddTheLoai = () => {
    setOpenModalTheLoaiNhac(true)
  }
  const handelCloseModalAddTheLoai = () => {
    setOpenModalTheLoaiNhac(false)
  }
  return (
    <Grid2>
      <IconButton style={{width:"150px" , fontSize:"0.8rem"}} onClick={handelOpenModalAddTheLoai}>
          Thêm mới thể loại
      </IconButton>
      <ModalAddTheLoai openModal={openModalTheLoainhac} handleClose={handelCloseModalAddTheLoai}/>
    </Grid2>
  )
}

export default TheLoaiNhac