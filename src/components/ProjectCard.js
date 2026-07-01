import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../App.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Dialog, IconButton } from '@mui/material';

export default function ProjectCard({title, subtitle, description, list,  page_link, gif, picture}) {
  const matches = useMediaQuery('(min-width:632px)');
  const img_size = matches? "224px": "100%";
  const [open, setOpen] = useState(false);


  function onCardEnter(){
    document.getElementById(title).src=gif;  
  }


  function onCardLeave(){
    document.getElementById(title).src=picture;
  }

  const handleClickOpen = () => {
    setOpen(true);
    onCardLeave();
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card sx={{backgroundColor:'#282a31'}} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
        <CardContent>
            <Box className="project">
              <Box sx={{justifyContent:"center"}}>
                <img id={title} src={picture} alt='thumbnail' width={img_size} height="200px" className='project-image' />
              </Box>
                  <Box sx={{display:'flex', flexDirection:'row', justifyContent:"space-between"}}>
                    <a href={page_link} target="_blank" rel="noopener noreferrer" className='linkTitle' >
                      <Typography variant='h5' fontFamily={'roboto'} color={"#c45148"}>
                        {title}
                      </Typography>
                    </a>
                    <IconButton disableRipple 
                    onClick={handleClickOpen}>
                      {
                          <KeyboardArrowDownIcon sx={{ color: '#c45148', "&:hover":{
                            color:"white"
                          }
                            ,"&:active":{
                            color:"white"
                          }
                        }} />
                      }
                    </IconButton>
                  </Box>
                  <Box sx={{display:'flex', flexWrap:'wrap'}}>
                    <Typography fontFamily={'roboto'} color={"#91fdc3"}>
                    {subtitle}
                    </Typography>
                    <Typography sx={{fontSize:"12px"}} fontFamily={'roboto'} color={"white"}>
                    {description}
                    </Typography>

                  </Box>
                  <Dialog                    
                    open={open}
                    onClose={handleClose}>
                      <Box sx={{backgroundColor:'#282a31', display:'flex', flexDirection:'column', justifyContent:"space-between", padding:"16px"}}>
                        <img id={title} src={gif} alt='thumbnail' width={matches?"100%":'100%'} height="256px" className='project-image'/>
                            <a href={page_link} className='linkTitle' >
                            <Typography variant='h5' fontFamily={'roboto'} color={"#c45148"}>
                              {title}
                            </Typography>
                            </a>
                            <Typography sx={{fontSize:"12px"}} fontFamily={'roboto'} color={"white"}>
                            {list}
                            </Typography>
                          </Box>
                  </Dialog>
                                      
                </Box>
        </CardContent>
    </Card>
  );
}
