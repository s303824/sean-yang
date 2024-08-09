import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function TopBar(){  
    return (
        <Box sx={{ flexGrow: 1  }}>
          <AppBar position="sticky">
            <Toolbar className='bar'>
              <div>
              <Typography variant="h2" className="title" sx={{flexGrow: 1, textAlign:"center" , padding:2}}>
                    Sean Yang
                </Typography>
              </div>
          </Toolbar>
        </AppBar>
      </Box>

    )
}
export default TopBar;