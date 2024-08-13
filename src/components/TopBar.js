import {ButtonGroup, Box, AppBar, IconButton, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css';

function TopBar(){ 
    return (
        <Box sx={{position:"sticky", justifyContent:'left'}}>
          <AppBar position="sticky">
            <Box className='bar' sx={{display:'flex', flexWrap:'wrap'}}>
              <Typography variant="h2" className="title" sx={{flexGrow: 1, textAlign:"left" , padding:2}} fontFamily={'inconsolata'}>
                Sean Yang
              </Typography>
              
                <ButtonGroup sx={{ margin:2}}>
                    <IconButton >
                      <a href='mailto:syangcontact@gmail.com' class="fa fa-email">
                        <EmailIcon/>
                      </a>
                    </IconButton>

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
          </Box>
        </AppBar>
      </Box>

    )
}
export default TopBar;