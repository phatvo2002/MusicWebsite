import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Stack,
  Tooltip,
  Box,
} from "@mui/material";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';
import { AudioPlayer } from "react-audio-player-component";

const ThuVienDetail = () => {
  const [listLibary, setListLibary] = useState([]);
  const { id } = useParams();

  const handleDeleteBainhac = async (thuVienId , baiNhacId) => {
     const response = axios.delete(`https://localhost:7280/api/ThuVien/deletethuvienbainhac?thuVienId=${thuVienId}&baiNhacId=${baiNhacId}`)
     console.log(response)
     if(response.status === 200)
     {
      toast.success("Xóa khỏi thư viện thành công")
      window.location.reload()
     }
     
  }

  useEffect(() => {
    const getLibary = async () => {
      const response = await axios.get(
        `https://localhost:7280/api/ThuVien/getthuvienbainhacbythuvienid?id=${id}`
      );
      if (response.status == 200) {
        setListLibary(response?.data);
      } else {
        toast.error(
          "Đã có lỗi xảy ra , vui lòng liên hệ bộ phận chăm sóc khách hàng để hỗ trợ"
        );
      }
    };
    getLibary();
  }, [id]);

  return (
    <TableContainer>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Thư viện của bạn
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">BÀI HÁT</TableCell>
            <TableCell align="center">NGHE NHAC</TableCell>
            <TableCell align="center">THỜI GIAN</TableCell>
            <TableCell align="center">HÀNH ĐỘNG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listLibary.map((song) => (
            <TableRow key={song.id}>
              <TableCell align="center">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={`https://localhost:7280/api/File/image?path=${song?.baiNhac?.duongDanHinhAnh}`} // Replace with actual album cover URL
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 10,
                      borderRadius: 4,
                    }}
                  />
                  <div>
                    <Typography variant="body1">
                      {song?.baiNhac?.tenBaiNhac}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {song?.baiNhac?.nhacSi?.tenNhacSi}
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">

              <Box sx={{ flex: 2 ,marginLeft:10}}>
                  <AudioPlayer
                src={`https://localhost:7280/api/File/file?path=${encodeURIComponent(
                  song?.baiNhac.duongDanFileAmNhac
                )}&filename=${encodeURIComponent(song?.baiNhac?.tenFile)}`}
                minimal={true}
                width={350}
                trackHeight={20}
                barWidth={1}
                gap={1}
                visualise={false}
                barPlayedColor="pink"
                skipDuration={2}
                showLoopOption={true}
                showVolumeControl={true}
                volumeControlColor={true}
                seekBarColor="pink"
                hideSeekBar={true}
                hideTrackKnobWhenPlaying={true}
                allowSkip={true}
              />
              </Box>
              </TableCell>
              <TableCell align="center">
                {song.baiNhac?.thoiLuong}
                {/* <IconButton onClick={() => toggleFavorite(song.id)}>
                  {song.favorite ? (
                    <FavoriteIcon color="secondary" />
                  ) : (
                    <FavoriteBorderIcon color="secondary" />
                  )}
                </IconButton> */}
              </TableCell>
              <TableCell align="center">
                 <Stack  direction="row" spacing={2}> 
                  <Tooltip title="Xóa bài nhạc khỏi thư viện" >
                     <IconButton onClick={handleDeleteBainhac(song?.thuVienId, song?.baiNhacId)}>
                         <DeleteIcon/>
                     </IconButton>
                  </Tooltip>
                  <Tooltip title="Tải bài hát">
                     <IconButton>
                         <DownloadIcon/>
                     </IconButton>
                  </Tooltip>
                 </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThuVienDetail;
