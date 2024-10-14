import { Box, Container, Grid2, Typography , Link } from '@mui/material'
import React from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link as RouterLink } from 'react-router-dom';
const stylesBox = {
   border:"1px solid #f010ae",
   margin:"20px",
   borderRadius:"5px",
   textAlign:"center",
   padding :"20px",
}

const Administrator = () => {
  return (
    <Container >
       <Grid2 spacing={2} container style={{display:"flex" ,margin:"0 auto"}}>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <MusicNoteIcon/>
                  <Typography >
                     Quản lý bài nhạc
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <LibraryMusicIcon/>
                   <Typography >
                     Quản lý albums
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <PersonPinIcon/>
                  <Typography >
                      Quản lý nhạc sĩ
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                   <AccountCircleIcon/>
                   <Typography >
                     Quản lý người dùng
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                   <HeadphonesIcon/>
                   <Typography >
                    <Link component={RouterLink} to="/Administrator/TheLoaiNhac"> Quản lý thể loại</Link>
                   </Typography>
                </Box>
            </Grid2>
       </Grid2>
    </Container>
  )
}

export default Administrator