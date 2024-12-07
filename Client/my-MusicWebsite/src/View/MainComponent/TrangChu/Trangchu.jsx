import { useEffect, useState } from "react";
import banner from "../../../assets/images/banner.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { styled } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import product from "../../../assets/images/product.jpg";
import axios from "axios";
import { toast } from "react-toastify";
const Trangchu = () => {
  const [songsTopView, setSongs] = useState([]);
  const [songMoiPhatHanh, setSongMoiPhat] = useState([]);
  const [songTopWatch, setSongTopWatch] = useState([]);
  const [nhacSiList, setNhacSiList] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getNhacSi = async () => {
      const response = await axios.get(
        `https://localhost:7280/api/NhacSi/getallnhacsi`
      );
      if (response.status === 200) {
        setNhacSiList(response?.data);
      }
    };
    getNhacSi();
  }, []);

  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.get(
        `https://localhost:7280/api/BaiNhac/goiybaihat?userId=${userId}`
      );
      if (response.status === 200) {
        setSongs(response?.data);
      }
    };
    getSongs();
  }, []);
  useEffect(() => {
    const getSongsTop5 = async () => {
      const response = await axios.get(
        `https://localhost:7280/api/BaiNhac/gettop5bainhacnhieuluotxem`
      );
      if (response.status === 200) {
        setSongTopWatch(response?.data);
      }
    };
    getSongsTop5();
  }, []);
  useEffect(() => {
    const getSongsMoiPhatHanh = async () => {
      const response = await axios.get(
        "https://localhost:7280/api/BaiNhac/gettop5bainhacmoiphathanh"
      );
      if (response.status === 200) {
        setSongMoiPhat(response?.data);
      }
    };
    getSongsMoiPhatHanh();
  }, []);

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

  const StyledTableCell = styled(TableCell)({
    color: "#fff",
    fontWeight: "bold",
    borderBottom: "none",
  });

  const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
      backgroundColor: "#222",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#333",
    },
  });

  const bannerstyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
    position: "relative",
    borderRadius: "10px",
  };
  const [hover, setHover] = useState(false);

  const handleAddLibary = async (baiNhacId)=>{
    const thuVienId = localStorage.getItem("thuVienID");
    if(thuVienId  == null || undefined)
    {
       toast.warning("Bạn cần đăng nhập để thực hiện chức năng")
    }else
    {
      const data = {
        thuVienId : thuVienId,
        baiNhacId : baiNhacId,
      }
      const response = await axios.post("https://localhost:7280/api/ThuVien/addthuvienbainhac",data)
      if(response.status === 200)
      {
        toast.success("Thêm vào thư viện thành công")
      }
      else
      {
        toast.error("Đã có lỗi xảy ra , vui lòng liên hệ với bộ phận chăm sóc khách hàng để hỗ trợ")
      }
    }
  }
  return (
    <Grid2>
      <Grid2 sx={bannerstyle}>
        <Stack direction="row" spacing={2}>
          <Box sx={{ width: "60%" }}></Box>
          <Box sx={{ width: "40%" }}>
            <Typography
              variant="h1"
              component="h2"
              align="left"
              style={{
                marginTop: "20%",
                transition: "transform 0.3s ease, color 0.3s ease",
                transform: hover ? "scale(1.1)" : "scale(1)", // Scale effect
                color: hover ? "#FF6347" : "inherit",
                animation: "fadeInUp 1s ease-out forwards", // Change color on hover
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Khám phá tất cả các bài hát mới
            </Typography>
            <Typography variant="body1" component="p" style={{ padding: 10 }}>
              Trong website bạn có thể sưu tập được các bài hát phổ biến và các
              bài hát hiện đại nhất
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <Button
                variant="contained"
                className="animated-button"
                style={{ backgroundColor: "#f010ae", padding: "10px" }}
              >
                Khám phá ngay
              </Button>
              <Button
                variant="outlined"
                sx={{ marginLeft: 4 }}
                className="animated-button"
              >
                Tạo danh sách phát
              </Button>
            </Box>
          </Box>
        </Stack>
      </Grid2>

      {userId ? (
        <Grid2>
          <Typography
            variant="h4"
            component="div"
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: "20px",
              padding: "0px 30px",
            }}
          >
            Top <span style={{ color: "#FF69B4" }}> Gợi ý dành cho bạn</span>
          </Typography>
          <Grid2 sx={{ padding: "20px" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
            >
              {songsTopView.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        background: "#212121",
                        borderRadius: "5px",
                        width: "200px",
                        color: "text.secondary",
                      }}
                      key={item.id}
                      className="animated-product"
                    >
                      <img
                        src={`https://localhost:7280/api/File/image?path=${item.duongDanHinhAnh}`}
                        style={{
                          width: "100%",
                          padding: "3px 5px",
                          borderRadius: "5px",
                        }}
                      />
                      <Link
                        to={`/bainhac/${item.tenBaiNhac}/${item.id}`}
                        style={{
                          padding: "1px 10px",
                          textDecoration: "none",
                          color: "text.secondary",
                        }}
                      >
                        {item.tenBaiNhac}
                      </Link>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ padding: "3px 10px" }}
                      >
                        {item.nhacSi.tenNhacSi}
                      </Typography>
                      <Stack direction="row" spacing={2} padding={1}>
                        <Tooltip title="Thêm vào thư viện">
                          <IconButton onClick={()=>handleAddLibary(item?.id)}>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Thêm vào danh sách phát">
                          <IconButton>
                            <PlaylistAddIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid2>
          <Box alignItems="center">
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                backgroundColor: "#333",
                color: "#FF69B4",
                textTransform: "none",
              }}
            >
              + Xem tất cả
            </Button>
          </Box>
        </Grid2>
      ) : (
        <div></div>
      )}

      <Grid2>
        <Typography
          variant="h4"
          component="div"
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "20px",
            padding: "0px 30px",
          }}
        >
          Nhạc <span style={{ color: "#FF69B4" }}> mới phát hành</span>
        </Typography>
        <Grid2 sx={{ padding: "20px" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {songMoiPhatHanh.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      background: "#212121",
                      borderRadius: "5px",
                      width: "200px",
                      color: "text.secondary",
                    }}
                    key={item.id}
                    className="animated-product"
                  >
                    <img
                      src={`https://localhost:7280/api/File/image?path=${item.duongDanHinhAnh}`}
                      style={{
                        width: "100%",
                        padding: "3px 5px",
                        borderRadius: "5px",
                      }}
                    />
                    <Link
                      to={`/bainhac/${item.tenBaiNhac}/${item.id}`}
                      style={{
                        padding: "1px 10px",
                        textDecoration: "none",
                        color: "text.secondary",
                      }}
                    >
                      {item.tenBaiNhac}
                    </Link>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ padding: "3px 10px" }}
                    >
                      {item.nhacSi.tenNhacSi}
                    </Typography>
                    <Stack direction="row" spacing={2} padding={1}>
                      <Tooltip title="Thêm vào thư viện">
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Thêm vào danh sách phát">
                        <IconButton>
                          <PlaylistAddIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid2>
        <Box alignItems="center">
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              backgroundColor: "#333",
              color: "#FF69B4",
              textTransform: "none",
            }}
          >
            + Xem tất cả
          </Button>
        </Box>
      </Grid2>

      <Typography
        variant="h4"
        component="div"
        style={{
          color: "white",
          fontWeight: "bold",
          marginTop: "20px",
          padding: "0px 30px",
        }}
      >
        Nhạc<span style={{ color: "#FF69B4" }}> Xu hướng</span>
      </Typography>
      <Grid2 sx={{ marginTop: 2 }}>
        <TableContainer
          style={{
            backgroundColor: "#000",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Tên bài hát</StyledTableCell>
                <StyledTableCell>Ngày phát hành</StyledTableCell>
                <StyledTableCell>Album</StyledTableCell>
                <StyledTableCell>Thời gian</StyledTableCell>
                <StyledTableCell>Thao tác</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {songTopWatch.map((song, index) => (
                <StyledTableRow key={song.id}>
                  <StyledTableCell>{`#${index + 1}`}</StyledTableCell>
                  <StyledTableCell>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={`https://localhost:7280/api/File/image?path=${song.duongDanHinhAnh}`}
                        style={{
                          borderRadius: "4px",
                          marginRight: "10px",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div>
                        <Typography style={{ fontWeight: "bold" }}>
                          {song.tenBaiNhac}
                        </Typography>
                        <Typography variant="caption" style={{ color: "#aaa" }}>
                          {song.nhacSi?.tenNhacSi}
                        </Typography>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>
                    {new Date(song.ngayPhatHanh).toLocaleDateString()}
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>{song.thoiLuong}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton size="small" style={{ marginLeft: "10px" }}>
                      <FavoriteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#333",
                      color: "#FF69B4",
                      textTransform: "none",
                    }}
                  >
                    + View All
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          variant="h4"
          component="div"
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "20px",
            padding: "0px 30px",
          }}
        >
          Nghệ sĩ phổ biến <span style={{ color: "#FF69B4" }}> phổ biến</span>
        </Typography>
        <Grid2 sx={{ padding: "20px" }}>
          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {songs.map((item, index) => (
              <Box key={index}>
                <img
                  src={product}
                  style={{
                    width: "100%",
                    height: "200px",
                    padding: "3px 5px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ padding: "1px 10px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ padding: "3px 10px" }}
                >
                  {item.artist}
                </Typography>
              </Box>
            ))}
          </Stack> */}
          <Grid2 sx={{ padding: "20px" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
             
            >
              {nhacSiList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box key={index}>
                      <img
                        src={`https://localhost:7280/api/File/image?path=${item.url}`}
                        style={{
                          width: "100%",
                          height: "200px",
                          padding: "3px 5px",
                          borderRadius: "100%",
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="p"
                        sx={{ padding: "1px 10px" }}
                      >
                        {item.tenNhacSi}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid2>
          <Box alignItems="center">
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                backgroundColor: "#333",
                color: "#FF69B4",
                textTransform: "none",
              }}
            >
              + View All
            </Button>
          </Box>
        </Grid2>

        <Typography
          variant="h4"
          component="div"
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "20px",
            padding: "0px 30px",
          }}
        >
          Top <span style={{ color: "#FF69B4" }}> Albums</span>
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
                }}
                key={index}
                className="animated-product"
              >
                <img
                  src={product}
                  style={{
                    width: "100%",
                    height: "200px",
                    padding: "3px 5px",
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
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ padding: "3px 10px" }}
                >
                  {item.artist}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Box alignItems="center">
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                backgroundColor: "#333",
                color: "#FF69B4",
                textTransform: "none",
              }}
            >
              + View All
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Trangchu;
