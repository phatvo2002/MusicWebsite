import { Grid2, IconButton } from '@mui/material'
import { useState } from 'react'
import ThemMoiBaiNhac from './Modal/ThemMoiBaiNhac'
const BaiNhac = () => {
    const [openModalThemMoiBaiNhac, setOpenModalThemMoiBaiNhac]= useState(false)

    const handleOpenModalAddbaiNhac = () => {
      setOpenModalThemMoiBaiNhac(true)
    }
    const handleCloseModalThemMoiBaiNhac = () =>{
      setOpenModalThemMoiBaiNhac(false)
    }
  return (
    <Grid2>
     <IconButton style={{width:"150px" , fontSize:"0.8rem"}} onClick={handleOpenModalAddbaiNhac }>
          Thêm mới bài nhạc
      </IconButton>
      <ThemMoiBaiNhac openModal={openModalThemMoiBaiNhac} handleClose={handleCloseModalThemMoiBaiNhac}/>
    </Grid2>
  )
}

export default BaiNhac