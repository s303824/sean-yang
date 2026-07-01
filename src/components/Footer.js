import {ButtonGroup, Box, AppBar, IconButton, Typography, Link } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css';
import useMediaQuery from '@mui/material/useMediaQuery';


function Footer(){ 
    const matches = useMediaQuery('(min-width:632px)');
  
    return (
            <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap', height: "10", padding:2 , paddingBottom:12, borderTop:"1px solid white"}}>
              <Typography variant="h4"className="subtitle" sx={{flexGrow: 1, textAlign:"center", marginBottom:2}} fontFamily={'roboto'}>
                CONTACT
              </Typography>
              <Box sx={{display:"grid", gridTemplate: " auto auto / auto auto",gap:'16px', justifyContent:"center"}}>
                <Link href='mailto:syangcontact@gmail.com'>
                  <Box sx={{display:'flex',flexDirection:"row"}}>
                      <a class="fa fa-email">
                        <EmailIcon/>
                      </a>
                      <Box sx={{px:1,alignContent:"center"}}>{matches &&
                        <Typography sx={{align:"center", color:"white"}}>
                          syangcontact@gmail.com
                        </Typography>}

                      </Box>
                </Box>
                </Link>
                
                <Link href="https://www.linkedin.com/in/sean-yang1/">
                  <Box sx={{display:'flex',flexDirection:"row"}}>

                      <a href="https://www.linkedin.com/in/sean-yang1/" class="fa fa-linkedin"/>
                    <Box sx={{px:1,alignContent:"center"}}>{matches &&
                        <Typography sx={{textAlign:"center", color:"white"}}>
                          https://www.linkedin.com/in/sean-yang1/
                        </Typography>}

                    </Box>
                    </Box>

                </Link>

                <Link href="https://github.com/s303824">
                  <Box sx={{display:'flex',flexDirection:"row"}}>
                      <a href="https://github.com/s303824" class="fa fa-github fa-inverse"/>
                    <Box sx={{px:1, alignContent:"center"}}>{matches &&
                        <Typography sx={{textAlign:"center", color:"white"}}>
                          https://github.com/s303824
                        </Typography>}

                    </Box>

                  </Box>

                </Link>
                <Link href='https://the-other-other.itch.io/'>
<Box sx={{display:'flex',flexDirection:"row"}}>
                      <a href='https://the-other-other.itch.io/' class="fa fa-itchio">
                        <VideogameAssetIcon/>
                      </a>
                    <Box sx={{px:1,alignContent:"center"}}>{matches &&
                        <Typography sx={{textAlign:"center", color:"white"}}>
                          https://the-other-other.itch.io/
                        </Typography>}

                    </Box>
                  </Box>
                </Link>
                  

              </Box>
          </Box>

    )
}
export default Footer;