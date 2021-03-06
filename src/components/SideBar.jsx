import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component='nav'
      sx={{
        width: {
          sm: drawerWidth,
          flexShrink: { sm: 0 },
        },
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: {
            xs: 'block',
            '& .MuiDrawer-paper': {
              boxSizing: 'boder-box',
              width: drawerWidth,
            },
          },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Alexander Chavez
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={text} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
