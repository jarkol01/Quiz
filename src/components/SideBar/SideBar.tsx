import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home'
import Divider from "@mui/material/Divider";
import HistoryIcon from '@mui/icons-material/HistoryEdu'
import SchoolIcon from '@mui/icons-material/School'
import BookIcon from '@mui/icons-material/LibraryBooks'
//#880035

function SideBar() {
    return (
        <>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon sx={{color: "#bc063a"}}/>  
                        </ListItemIcon>
                        <ListItemText primary="Strona Głowna"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Historia"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <SchoolIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Kultura"/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
        </>
    );
}

export default SideBar;