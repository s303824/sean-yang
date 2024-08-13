import { Button, ButtonGroup, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import '../App.css';

function TopBar(){ 

    return (
        <Box sx={{position:"sticky", justifyContent:'left'}}>
          <AppBar position="sticky">
            <Toolbar className='bar'>
              <Typography variant="h2" className="title" sx={{flexGrow: 1, textAlign:"left" , padding:2}} fontFamily={'inconsolata'}>
                Sean Yang
              </Typography>
              
                <ButtonGroup sx={{ margin:2}}>
                    <IconButton>
                      <a href="https://www.linkedin.com/in/sean-y-430595124/" class="fa fa-linkedin"/>
                    </IconButton>
                    <IconButton>
                      <a href="https://github.com/s303824" class="fa fa-github"/>
                    </IconButton>
                    <IconButton >
                      <a href='https://the-other-other.itch.io/' class="fa fa-itchio">
                        <VideogameAssetIcon/>
                      </a>
                    </IconButton>
                  </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>

    )
}
export default TopBar;