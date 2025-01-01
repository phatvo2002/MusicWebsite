
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Stack,
  } from "@mui/material";
  import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
  
  const songs = [
    {
      id: 1,
      title: "Sorforce",
      artist: "The neighborhood",
      releaseDate: "Nov 4, 2023",
      album: "Hard to Imagine Neighbourhood Ever Changing",
      duration: "3:26",
    },
    {
      id: 2,
      title: "Skyfall Beats",
      artist: "nightmares",
      releaseDate: "Oct 26, 2023",
      album: "nightmares",
      duration: "2:45",
    },
    {
      id: 3,
      title: "Greedy",
      artist: "tate mcree",
      releaseDate: "Nov 30, 2023",
      album: "Greedy",
      duration: "2:11",
    },
    {
      id: 4,
      title: "Lovin On Me",
      artist: "jack harlow",
      releaseDate: "Dec 15, 2023",
      album: "Lovin On Me",
      duration: "2:18",
    },
    {
      id: 5,
      title: "pain the town red",
      artist: "Doja Cat",
      releaseDate: "Dec 29, 2023",
      album: "Paint The Town Red",
      duration: "3:51",
    },
  ];
  
  const Albumdetails = () => {
     const {id} = useParams()
     const [songAlbums, setSongAlbums]= useState([])

     useEffect(() => {
        const getAlbums = async () => {
          const response = await axios.get(
            `https://localhost:7280/api/BaiNhac/getbainhacbyalbumid?albumId=${id}`
          );
          if (response.status === 200) {
            setSongAlbums(response?.data);
          }
        };
        getAlbums();
      }, []);

      console.log(songAlbums[0]?.album?.url      )
    return (
      <Box sx={{ bgcolor: "#101828", color: "#fff", minHeight: "100vh", p: 3 }}>
        {/* Header Section */}
        <Stack direction="row" spacing={3} alignItems="center">
            <img
                  src={`https://localhost:7280/api/File/image?path=${songAlbums[0]?.album?.url}`}
                  style={{
                    width: "10%",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                />
          <Box>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
             {songAlbums[0]?.album?.tenAlbum}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              {songAlbums[0]?.album?.tenAlbum}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            {new Date(songAlbums[0]?.album?.ngayPhatHanh).toLocaleDateString("en-GB")}
            </Typography>
            <IconButton sx={{ mt: 2, bgcolor: "#FF4081", color: "#fff" }}>
              <PlayCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        </Stack>
  
        <Divider sx={{ my: 3, bgcolor: "gray" }} />
  
        {/* Song List */}
        <List>
          {songAlbums.map((song, index) => (
            <Box key={song.id}>
              <ListItem sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ width: "30px", fontWeight: "bold", textAlign: "center" }}
                >
                  {index + 1}
                </Typography>
                <ListItemAvatar>
                <img
                  src={`https://localhost:7280/api/File/image?path=${song?.duongDanHinhAnh}`}
                  style={{
                    width: "100%",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {song.tenBaiNhac}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      {song.nhacSi?.tenNhacSi}
                    </Typography>
                  }
                  sx={{ flex: 1, mx: 2 }}
                />
                <Typography sx={{ width: "150px", color: "gray" }}>
                  {song.ngayPhatHanh}
                </Typography>
                <Typography sx={{ flex: 1, color: "gray" }}>
                </Typography>
                <Typography sx={{ width: "60px", textAlign: "center" }}>
                  {song.thoiLuongs}
                </Typography>
                <IconButton>
                  <FavoriteBorderIcon sx={{ color: "gray" }} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon sx={{ color: "gray" }} />
                </IconButton>
              </ListItem>
              <Divider sx={{ bgcolor: "gray" }} />
            </Box>
          ))}
        </List>
      </Box>
    );
  };
  
  export default Albumdetails;
  