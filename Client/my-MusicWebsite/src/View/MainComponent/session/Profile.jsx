import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Tab,
  Tabs,
  Divider,
  Button,
  Grid2,
  Stack,
} from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HeadsetIcon from "@mui/icons-material/Headset";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LichSu from "./Components/LichSu";
import ChangePassword from "./Components/ChangePassword";
import image from "../../../assets/images/playlistBackground.jpg";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [playlist, setPlayList] = useState([]);
  // Xử lý chuyển đổi Tab
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getplaylist = async () => {
      const response = await axios.get(
        `https://localhost:7280/api/DanhSachPhat/getdanhsachphatbyuserid?userId=${userId}`
      );
      if (response.status === 200) {
        setPlayList(response.data);
      } else {
        toast.error(
          "Đã có lỗi xảy ra , vui lòng liên hệ bộ phận chăm sóc khách hàng để hỗ trợ"
        );
      }
    };
    if (userId) {
      getplaylist();
    }
  }, [userId]);
  return (
    <Box sx={{ padding: 2, width: "100%" }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", color: "#007bff" }}
      >
        QUẢN LÝ TÀI KHOẢN
      </Typography>
      <Grid2 container spacing={2}>
        {/* Sidebar */}
        <Grid2 xs={12} sm={4}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Avatar
              alt="User Avatar"
              src="/path-to-avatar.jpg"
              sx={{ margin: "auto", mb: 2 }}
            />
          </Box>
          <Paper variant="outlined">
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              orientation="vertical"
              sx={{ borderRight: 1, width: 200, borderColor: "divider" }}
            >
              <Tab label="Quản lý tài khoản" icon={<AccountCircleIcon />} />
              <Tab label="Playlist" icon={<QueueMusicIcon />} />
              <Tab label="Thư viện" icon={<LibraryMusicIcon />} />
              <Tab label="Lịch sử" icon={<HeadsetIcon />} />
              <Tab label="Đổi mật khẩu" icon={<ManageAccountsIcon />} />
              <Tab label="Đăng xuất" icon={<LogoutIcon />} />
            </Tabs>
          </Paper>
        </Grid2>

        {/* Main Content */}
        <Grid2 xs={12} sm={8} width={"80%"} h>
          {tabIndex === 0 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}>
              {/* Tab "Quản lý tài khoản" */}
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Giới thiệu
                </Typography>
                <Button variant="outlined" size="small">
                  Chỉnh sửa
                </Button>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ lineHeight: 3 }}>
                <Typography>ID: 37703447</Typography>
                <Typography>Họ và tên:</Typography>
                <Typography>Ngày sinh: 01/01/1970</Typography>
                <Typography>Giới tính: Khác</Typography>
                <Typography>Điện thoại:</Typography>
                <Typography>Địa chỉ:</Typography>
                <Typography>Tỉnh thành:</Typography>
                <Typography>Số CMND:</Typography>
                <Typography>Giới thiệu:</Typography>
              </Box>
            </Paper>
          )}

          {tabIndex === 1 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}>
              <Typography textAlign={"center"}>
                Danh sách phát của bạn{" "}
              </Typography>
              {Array.isArray(playlist) && (
                <Stack
                  direction="row" // Xếp các phần tử nằm ngang
                  spacing={2} // Khoảng cách giữa các phần tử
                  sx={{ overflowX: "auto", padding: 2 }} // Thêm cuộn ngang nếu danh sách dài
                >
                  {playlist.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column", // Nội dung trong mỗi mục xếp dọc
                        alignItems: "center", // Căn giữa nội dung trong mỗi mục
                        padding: 1,
                        border: "1px solid black", // Viền quanh mỗi mục
                        borderRadius: "8px",
                        minWidth: "150px", // Đặt kích thước tối thiểu
                      }}
                    >
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "8px",
                        }}
                        src={image}
                        alt="Playlist Thumbnail"
                      />
                      <p
                        style={{
                          margin: "8px 0",
                          fontWeight: "bold",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        <Link
                          component={RouterLink}
                          to={`/DanhSachPhat/${item?.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {item.tenDanhSachPhat}
                        </Link>
                      </p>
                    </Box>
                  ))}
                </Stack>
              )}
            </Paper>
          )}

          {tabIndex === 2 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}></Paper>
          )}

          {tabIndex === 3 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}>
              <LichSu />
            </Paper>
          )}

          {tabIndex === 4 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}>
              <ChangePassword />
            </Paper>
          )}

          {tabIndex === 5 && (
            <Paper variant="outlined" sx={{ padding: 2, mb: 3 }}></Paper>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Profile;
