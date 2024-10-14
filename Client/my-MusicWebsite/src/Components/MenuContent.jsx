
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Typography } from '@mui/material';
import {Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />  },
  { text: 'Discover', icon: <AnalyticsRoundedIcon /> },
  { text: 'Albums', icon: <PeopleRoundedIcon /> },
  { text: 'Artits', icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Recently Added', icon: <SettingsRoundedIcon /> },
  { text: 'Most played', icon: <InfoRoundedIcon /> },
];

const thirdListItems = [
  { text: 'Your favotites', icon: <SettingsRoundedIcon /> },
  { text: 'Your playlist', icon: <InfoRoundedIcon /> },
  { text: 'Add playlist', icon: <HelpRoundedIcon /> },
];
const fordListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> , url : "/"  },
  { text: 'Administrator', icon: <InfoRoundedIcon /> , url : "/Administrator" },
];
export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography style={{color :"#f010ae", paddingLeft:20}}>
         Libary
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
         Laylist and Favorites
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
        {fordListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                    <Link component={RouterLink} to={item.url}>{item.text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
