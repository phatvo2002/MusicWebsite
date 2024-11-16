import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Chip,
  Tab,
  Tabs,
  Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import product from "../../../assets/images/product.jpg";
import Banner1 from "../../../assets/images/banner1.jpg"
import Banner2 from "../../../assets/images/banner2.jpg"
import Banner3 from "../../../assets/images/banner3.jpg"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from "react";
const songsData = [
  { title: 'chúc ngủ ngon', artist: '52Hz', time: '3 giờ trước', premium: false },
  { title: 'Sẽ Thế Nào', artist: 'Tuyên', time: '4 giờ trước', premium: false },
  { title: 'YÊU 0 (feat. Cami)', artist: 'Lil Zpoet, Cami', time: '4 giờ trước', premium: false },
  { title: 'Because Of You', artist: 'Lauv', time: 'Hôm nay', premium: true },
  { title: 'Hold On Me', artist: 'Kygo, Sandro Cavazza', time: 'Hôm nay', premium: true },
  { title: 'The Mountain', artist: 'Shawn Mendes', time: 'Hôm nay', premium: true },
];
const songs = [
  {
    id: 1,
    title: "Sorforce",
    artist: "The Neighbourhood",
    releaseDate: "Nov 4, 2023",
    album: "Hard to Imagine the Neighbourhood Ever Changing",
    time: "3:26",
  },
  {
    id: 2,
    title: "Skyfall Beats",
    artist: "Nightmares",
    releaseDate: "Oct 26, 2023",
    album: "Nightmares",
    time: "2:45",
  },
  {
    id: 3,
    title: "Greedy",
    artist: "Tate McRae",
    releaseDate: "Dec 30, 2023",
    album: "Greedy",
    time: "2:11",
  },
  {
    id: 4,
    title: "Lovin On Me",
    artist: "Jack Harlow",
    releaseDate: "Dec 30, 2023",
    album: "Lovin On Me",
    time: "2:18",
  },
  {
    id: 5,
    title: "Paint the Town Red",
    artist: "Doja Cat",
    releaseDate: "Dec 29, 2023",
    album: "Paint The Town Red",
    time: "3:51",
  },
];

const KhamPha = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Container
      maxWidth="xl"
      style={{ padding: "20px", backgroundColor: "#1d1d1f", color: "white" }}
    >
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#0055ff",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          NHẠC CHỜ HAY
        </Typography>
        <Typography variant="h6" gutterBottom>
          SỐNG ĐỘNG TỪNG GIÂY GỌI
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffcc00",
            color: "black",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e6b800" },
          }}
        >
          CÀI ĐẶT NGAY
        </Button>
      </Box>

      {/* Playlist Section */}
      <Stack direction="row" spacing={2}>
        <Grid2 item xs={4} md={4}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#2b2b2d",
            }}
          >
            <img
              src={Banner1}
              alt="Nhạc Mới Mỗi Tuần"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Nhạc Mới Mỗi Tuần
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item xs={4} md={4}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#2b2b2d",
            }}
          >
            <img
              src={Banner2}
              alt="Today Hits"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Today Hits
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item xs={4} md={4}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#2b2b2d",
            }}
          >
            <img
              src={Banner3}
              alt="Hot Hits Vietnam"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Hot Hits Vietnam
            </Typography>
          </Box>
        </Grid2>
      </Stack>
      {/*  */}
      <Box sx={{ backgroundColor: '#1a1a2e', color: 'white', padding: 3, minHeight: '100vh' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Mới Phát Hành
      </Typography>
      
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{ marginBottom: 2 }}
      >
        <Tab label="Tất Cả" />
        <Tab label="Việt Nam" />
        <Tab label="Quốc Tế" />
      </Tabs>
      
      {/* Song list */}
      <Grid2 container spacing={2}>
        
      </Grid2>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Typography variant="body2" sx={{ color: '#b0b0b8', cursor: 'pointer' }}>
          Tất Cả &gt;
        </Typography>
      </Box>
    </Box>
      {/*  */}
      <Typography variant="h4" component="div" style={{ color: "white",padding : 20 }}>
        <span style={{ color: "#FF69B4" }}>Gợi ý </span> dành riêng cho bạn
      </Typography>
      <Grid2 sx={{ padding: "20px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {songs.map((item, index) => (
            <Box
              sx={{
                background: "#212121",
                borderRadius: "5px",
                color: "text.secondary",
                position: "relative",
              }}
              key={index}
              className="animated-product"
            >
              <img
                src={product}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "5px",
                }}
              />
              <Typography
                variant="h5"
                component="p"
                sx={{ padding: "1px 10px" }}
              >
                {item.title}
              </Typography>
              {/* <Typography variant='body1' component="p" sx={{padding:"3px 10px" ,position:"absolute" ,bottom:10}}>{item.artist}</Typography> */}
              <Stack direction="row" spacing={2} padding={1}>
                <Tooltip title="Thêm vào thư viện">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                </Tooltip >
                <Tooltip title="Thêm vào danh sách phát">
                <IconButton>
                  <PlaylistAddIcon />
                </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          ))}
        </Stack>
        <Box alignItems="center">
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#f010ae",
              color: "#FF69B4",
              textTransform: "none",
            }}
          >
            + Xem thêm
          </Button>
        </Box>
      </Grid2>
      <Typography variant="h4" component="div" style={{ color: "white",padding : 20 }}>
         Chill Music
      </Typography>
      <Grid2 sx={{ padding: "20px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {songs.map((item, index) => (
            <Box
              sx={{
                background: "#212121",
                borderRadius: "5px",
                color: "text.secondary",
                position: "relative",
              }}
              key={index}
              className="animated-product"
            >
              <img
                src={product}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "5px",
                }}
              />
              <Typography
                variant="h5"
                component="p"
                sx={{ padding: "1px 10px" }}
              >
                {item.title}
              </Typography>
              {/* <Typography variant='body1' component="p" sx={{padding:"3px 10px" ,position:"absolute" ,bottom:10}}>{item.artist}</Typography> */}
              <Stack direction="row" spacing={2} padding={1}>
                <Tooltip title="Thêm vào thư viện">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                </Tooltip >
                <Tooltip title="Thêm vào danh sách phát">
                <IconButton>
                  <PlaylistAddIcon />
                </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          ))}
        </Stack>
        <Box alignItems="center">
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#f010ae",
              color: "#FF69B4",
              textTransform: "none",
            }}
          >
            + Xem thêm
          </Button>
        </Box>
      </Grid2>
    </Container>
  );
};

export default KhamPha;
