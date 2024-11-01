
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import RadioIcon from '@mui/icons-material/Radio';
import AddIcon from '@mui/icons-material/Add';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const mainListItems = [
  { text: 'Trang chủ', icon: <HomeRoundedIcon />  , url : "/Trangchu"  },
  { text: 'Khám phá', icon: <AnalyticsRoundedIcon /> ,url : "/Khampha"  },
  { text: 'Albums', icon: <LibraryMusicIcon /> ,url : "/Albums" },
  { text: 'Nhạc sĩ', icon: <AudiotrackIcon /> ,url : "/Nhacsi" },
];

const secondaryListItems = [
  { text: 'Thêm gần đây', icon: <AddIcon /> ,url : "/Themganday" },
  { text: 'Nghe gần đây', icon: <RadioIcon /> ,url : "/Ngheganday"},
];

const thirdListItems = [
  { text: 'Đã thích', icon: <FavoriteIcon /> ,url : "/favorite" },
  { text: 'Danh sách phát', icon: <PlaylistPlayIcon /> ,url : "/Danhsachphat" },
  { text: 'Thêm danh sách phát', icon: <PlaylistAddIcon /> ,url : "/themdanhsachphat" },
];
const fordListItems = [
  { text: 'Cài đặt ', icon: <SettingsRoundedIcon /> , url : "/caidat"  },
  //{ text: 'Quản trị hệ thống', icon: <ManageAccountsIcon /> , url : "/Administrator" },
];
const AdministratorItem =[
  { text: 'Cài đặt ', icon: <SettingsRoundedIcon /> , url : "/"  },
  { text: 'Quản trị hệ thống', icon: <ManageAccountsIcon /> , url : "/Administrator" },
]

const token = localStorage.getItem('token')
export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
               <Link component={RouterLink} to={item.url}>{item.text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography style={{color :"#f010ae", paddingLeft:20}}>
         Thư viện
      </Typography>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography style={{color :"#f010ae", paddingLeft:20}}>
         Danh sách phát
      </Typography>
      <List dense>
        {thirdListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography style={{color :"#f010ae", paddingLeft:20}} >
         General
      </Typography>
      <List dense>
        {token ?  (AdministratorItem.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                    <Link component={RouterLink} to={item.url}>{item.text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )))
         :(
          fordListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                      <Link component={RouterLink} to={item.url}>{item.text}</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))
         )
      }
      </List>
    </Stack>
  );
}
