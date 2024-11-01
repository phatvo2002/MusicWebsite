import { Box, Button, Grid2, Stack, Typography } from "@mui/material"
import product from '../../../assets/images/product.jpg'

const songs = [
    { id: 1, title: "Sorforce", artist: "The Neighbourhood", releaseDate: "Nov 4, 2023", album: "Hard to Imagine the Neighbourhood Ever Changing", time: "3:26" },
    { id: 2, title: "Skyfall Beats", artist: "Nightmares", releaseDate: "Oct 26, 2023", album: "Nightmares", time: "2:45" },
    { id: 3, title: "Greedy", artist: "Tate McRae", releaseDate: "Dec 30, 2023", album: "Greedy", time: "2:11" },
    { id: 4, title: "Lovin On Me", artist: "Jack Harlow", releaseDate: "Dec 30, 2023", album: "Lovin On Me", time: "2:18" },
    { id: 5, title: "Paint the Town Red", artist: "Doja Cat", releaseDate: "Dec 29, 2023", album: "Paint The Town Red", time: "3:51" },
  ];

const KhamPha = ()=>{
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={12}>
            <Typography variant="h4" component="div" style={{ color: 'white', fontWeight: 'bold', marginTop: '20px' ,padding:"0px 30px" }}>
                <span style={{ color: '#FF69B4' }}> Thể loại </span> nhạc
            </Typography>
             <Grid2 sx={{padding: '20px'}}>
            <Stack  direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 4 }} >
              {songs.map((item , index)=>(
                  <Box sx={{background:"#212121" ,borderRadius:"5px" ,color:"text.secondary", position:"relative" }} key={index} className='animated-product'>
                  <img src={product} style={{width:"100%" ,height:"200px" ,borderRadius:"5px"}}/> 
                  <Typography variant='h5' component="p" sx={{padding:"1px 10px",position:"absolute" ,bottom:20}} >{item.title}</Typography>
                  {/* <Typography variant='body1' component="p" sx={{padding:"3px 10px" ,position:"absolute" ,bottom:10}}>{item.artist}</Typography> */}
              </Box>
              ))}
            </Stack>
            <Box alignItems="center">
              <Button  variant="contained" style={{ marginTop: '20px', backgroundColor: '#f010ae', color: '#FF69B4', textTransform: 'none' }}>
                + Xem thêm
              </Button>
            </Box>
        </Grid2>
            </Grid2>
            <Grid2 size={12}>
            <Typography variant="h4" component="div" style={{ color: 'white', fontWeight: 'bold', marginTop: '20px' ,padding:"0px 30px" }}>
                <span style={{ color: '#FF69B4' }}> Tâm </span> trạng
            </Typography>
             <Grid2 sx={{padding: '20px'}}>
            <Stack  direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 2 }} >
              {songs.map((item , index)=>(
                  <Box sx={{background:"#212121" ,borderRadius:"5px" ,color:"text.secondary",  }} key={index} className='animated-product'>
                  <img src={product} style={{width:"100%" ,height:"200px" ,borderRadius:"5px"}}/> 
                  <Typography variant='h5' component="p" sx={{padding:"1px 10px"}} >{item.title}</Typography>
                  {/* <Typography variant='body1' component="p" sx={{padding:"3px 10px" ,position:"absolute" ,bottom:10}}>{item.artist}</Typography> */}
              </Box>
              ))}
            </Stack>
            <Box alignItems="center">
              <Button  variant="contained" style={{ marginTop: '20px', backgroundColor: '#f010ae', color: '#FF69B4', textTransform: 'none' }}>
                + Xem thêm
              </Button>
            </Box>
            
        </Grid2>
            </Grid2>
            <Grid2 size={12}>
            <Typography variant="h4" component="div" style={{ color: 'white', fontWeight: 'bold', marginTop: '20px' ,padding:"0px 30px" }}>
                <span style={{ color: '#FF69B4' }}> Giai </span> điệu
            </Typography>
             <Grid2 sx={{padding: '20px'}}>
            <Stack  direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 4 }} >
              {songs.map((item , index)=>(
                  <Box sx={{background:"#212121" ,borderRadius:"5px" ,color:"text.secondary",  }} key={index} className='animated-product'>
                  <img src={product} style={{width:"100%" ,height:"200px" ,borderRadius:"5px"}}/> 
                  <Typography variant='h5' component="p" sx={{padding:"1px 10px"}} >{item.title}</Typography>
                  {/* <Typography variant='body1' component="p" sx={{padding:"3px 10px" ,position:"absolute" ,bottom:10}}>{item.artist}</Typography> */}
              </Box>
              ))}
            </Stack>
            <Box alignItems="center">
              <Button  variant="contained" style={{ marginTop: '20px', backgroundColor: '#f010ae', color: '#FF69B4', textTransform: 'none' }}>
                + Xem thêm
              </Button>
            </Box>
            
        </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default KhamPha