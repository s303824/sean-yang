import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../App.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Icon, IconButton } from '@mui/material';

export default function ProjectCard({title, subtitle, description, list,  page_link, gif, picture}) {
  const matches = useMediaQuery('(min-width:632px)');
  const isWrap = matches ? "nowrap": "wrap";
  const img_size = matches? "200px": "100%";
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function onCardEnter(){
    setIsHovering(true);
    document.getElementById(title).src=gif;  
  }


  function onCardLeave(){
    setIsHovering(false);
    document.getElementById(title).src=picture;
    hideListOnLeave(); 
  }

  async function hideListOnLeave() {
    setTimeout(()=>{
      if(!isHovering){
        setIsVisible(false);
      }
    },1000)
  }



  return (
    <Card sx={{backgroundColor:'#282a31'}} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
        <CardContent>
            <Box className="project">
                <img id={title} src={picture} alt='thumbnail' width={img_size} height="200px" className='project-image'/>
                  <Box sx={{display:'flex', flexDirection:'row', justifyContent:"space-between"}}>
                    <a href={page_link} className='linkTitle' >
                      <Typography variant='h5' fontFamily={'roboto'} color={"#c45148"}>
                        {title}
                      </Typography>
                    </a>

                    <IconButton disableRipple 
                    onClick={toggleVisibility}>
                      {
                        !isVisible ? 
                          <KeyboardArrowDownIcon sx={{ color: '#c45148', "&:active":{
                            color:"white"
                          }
                        }} />:
                          <KeyboardArrowUpIcon sx={{ color: '#c45148', "&:active":{
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
                    {isVisible && <Typography sx={{fontSize:"12px"}} fontFamily={'roboto'} color={"white"}>
                    {list}
                    </Typography>}
                </Box>
        </CardContent>
    </Card>
  );
}
