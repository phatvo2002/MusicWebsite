import { Box, Container, Grid2, Typography , Link } from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link as RouterLink } from 'react-router-dom';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ExplicitIcon from '@mui/icons-material/Explicit';
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
       <Grid2 spacing={2} container >
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <MusicNoteIcon/>
                  <Typography >
                  <Link component={RouterLink} to="/Administrator/BaiNhac">Bài nhạc</Link>
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <LibraryMusicIcon/>
                   <Typography >
                   <Link component={RouterLink} to="/Administrator/Album">Album</Link>
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                  <PersonPinIcon/>
                  <Typography >
                  <Link component={RouterLink} to="/Administrator/NhacSi">Nhạc sĩ</Link>
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
                  <AudiotrackIcon/>
                   <Typography >
                   <Link component={RouterLink} to="/Administrator/TamTrang">Tâm trạng</Link>
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                   <HeadphonesIcon/>
                   <Typography >
                    <Link component={RouterLink} to="/Administrator/TheLoaiNhac">Thể loại</Link>
                   </Typography>
                </Box>
            </Grid2>
            <Grid2 size={3}>
                <Box sx={stylesBox}>
                   <ExplicitIcon/>
                   <Typography >
                    <Link component={RouterLink} to="/Administrator/Chude">Chủ đề</Link>
                   </Typography>
                </Box>
            </Grid2>
       </Grid2>
    </Container>
  )
}

export default Administrator