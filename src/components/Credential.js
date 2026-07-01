import { useState } from "react";
import { Box, Typography, Dialog, Button, IconButton, Tooltip} from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Credential({title, subtitle, skills, link}) {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
    <Box className='credential'>
        <Box sx={{display:"flex", justifyContent:"end"}}>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Typography fontFamily={'roboto'} sx={{alignContent:"center"}}>
                    {title}
                </Typography>
                <Tooltip title="Learn More" placement="top">
                    <Button onClick={handleClickOpen} disableRipple sx={{padding:"0"}}>
                        <ArrowOutwardIcon sx={{color:"white","&:hover":{color:"gray"}, "&:active":{color:"gray"}}}/>
                    </Button>
                </Tooltip>
        </Box>
        
        </Box>
        <Typography fontFamily={'roboto'}sx={{color:"#91fdc3"}}>
        {subtitle}
        </Typography>
        <Dialog                    
            open={open}
            onClose={handleClose}>
                <Box sx={{backgroundColor:'#282a31', display:'flex', flexDirection:'column', justifyContent:"space-between", padding:"16px"}}>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Typography variant='h5' fontFamily={'roboto'} color={"#c45148"}>
                            {title}
                        </Typography>
                        <Tooltip
                            describeChild
                            title="View Certificate PDF"
                            slotProps={{
                                popper: {
                                modifiers: [
                                    {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -70],
                                    },
                                    },
                                ],
                                },
                            }}
                            >
                            <IconButton disableRipple href={link}>
                                <FileDownloadIcon sx={{color:"white","&:hover":{color:"gray"}, "&:active":{color:"gray"}}}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                    <Typography sx={{fontSize:"12px"}} fontFamily={'roboto'} color={"white"}>
                    {skills}
                    </Typography>
                    </Box>
            </Dialog>
    </Box>
    );
}