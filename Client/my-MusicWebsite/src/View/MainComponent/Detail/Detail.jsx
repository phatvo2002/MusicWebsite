import { Box, Button, Grid2, IconButton, Stack, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {AudioPlayer} from 'react-audio-player-component';
import "../../../css/main.css"
import 'react-h5-audio-player/lib/styles.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ModalAddDanhSachPhat from "./Modal/ModalAddDanhSachPhat";
const Detail = () => {
  const { id } = useParams();
  const [dataBaiNhac , setDataBaiNhac]  = useState({})
  const [fileName ,setFileName] = useState('') 
  const [filePath ,setFilePath] = useState('') 
  const [spinning, setSpinning] = useState(false);
  const [modal,setModal] = useState(false);
  const [startAudio , setStartAudio] = useState(false);
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Quay trở về trang trước đó
  };
  console.log(dataBaiNhac)
  const handelOpenModalAddDanhSachPhat = () =>{
    setModal(true)
  }
  const handelcloseModalAddDanhSachPhat = () =>{
    setModal(false)
  }

  useEffect(()=>{
    const getSongDetail = async ()=>{
       const response = await axios.get(`https://localhost:7280/api/BaiNhac/getbainhacbyid?Id=${id}`)
        if(response.status === 200)
        {
          setDataBaiNhac(response?.data)
          setFileName(response?.data?.tenFile)
          setFilePath(response?.data?.duongDanFileAmNhac)
        }
    }
    getSongDetail()
  },[])

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
        setSpinning(false);
    }, 30000);

   
}
 useEffect(()=>{
      const UpdateView = async ()=>{
         await axios.put(`https://localhost:7280/api/BaiNhac/updateview?id=${id}`)
      }
      if(startAudio)
      UpdateView()
    },[id ,startAudio])

useEffect(() => {
  if (filePath && fileName) {
    const newUrl = `https://localhost:7280/api/File/file?path=${encodeURIComponent(filePath)}&filename=${encodeURIComponent(fileName)}`;
    setUrl(newUrl);
  }
}, [filePath, fileName]);
  return (
    <Grid2 container spacing={2}>
      <Button  onClick={handleBack}>
    <ArrowBackIcon/>
  </Button>
        <Box
            sx={{
                position: 'relative', // Để lớp overlay có thể phủ lên ảnh
                width: '100%',
                height: '600px',
                borderRadius: '10px',
                overflow: 'hidden'
            }}
        >
            {/* Ảnh */}
            <img
                src={`https://localhost:7280/api/File/image?path=${dataBaiNhac.duongDanHinhAnh}`}
                alt="Bai Nhac"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px'
                }}
            />

            {/* Lớp overlay */}
            <Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '10px',
  }}
>
  <div className={`disk ${spinning ? 'spin' : ''}`} onClick={handleSpin}>
    <img src={`https://localhost:7280/api/File/image?path=${dataBaiNhac.duongDanHinhAnh}`} alt="Disk" className="disk" />
  </div>
  <Stack direction="row" spacing={2} sx={{
    width:"50%"
  }}>
    <Box>
       <Typography variant='h3' component="h3" sx={{width:"600px"}}>{dataBaiNhac.tenBaiNhac}</Typography>
       <Typography variant='caption' component="p" >{dataBaiNhac.nhacSi?.tenNhacSi}</Typography>
    </Box>
    <Box>
          <FavoriteBorderIcon/>
          <IconButton onClick={handelOpenModalAddDanhSachPhat}>
          <PlaylistAddIcon/>
          </IconButton>
    </Box>
  </Stack>
  <Box marginTop={5}>
    <div>
    {url && ( 
         <AudioPlayer 
         src={url}
         minimal={false}
         width={750}
         trackHeight={75}
        // barWidth={1}
         gap={1}
         visualise={true}
       
         barPlayedColor="pink"
         skipDuration={2}
         showLoopOption={true}
         showVolumeControl={true}
         volumeControlColor={true}
         seekBarColor="pink"
         hideSeekBar={true}
         hideTrackKnobWhenPlaying={true}
         onplay={()=>setStartAudio(true)}
         allowSkip={true}
         barWidth={true}
       />
      )}
    </div>
  </Box>
</Box>
        </Box>
        <Box>
          {/* modal */}
           <ModalAddDanhSachPhat openModal={modal} handleClose={handelcloseModalAddDanhSachPhat} bainhacId={id}/>
        </Box>
    </Grid2>
  )
}
export default Detail