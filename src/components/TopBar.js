import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function TopBar(){  
    return (
        <Box sx={{ flexGrow: 1  }}>
          <AppBar position="sticky">
            <Toolbar sx={{bgcolor:"#282a31"}}>
              <div>
              <Typography variant="h3" sx={{ color: "#c45148", flexGrow: 1, textAlign:"center" , padding:2}}>
                    Sean Yang
                </Typography>
              </div>
          </Toolbar>
        </AppBar>
      </Box>

    )
}
export default TopBar;