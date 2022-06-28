import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { MenuOpen, LogoutOutlined } from '@mui/icons-material';

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
        },
        ml: {
          sm: `${drawerWidth}px)`,
        },
      }}
    >
      <div></div>
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{
            mr: 2,
            display: {
              sm: 'none',
            },
          }}
        >
          <MenuOpen />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>
            JournalApp
          </Typography>
          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
