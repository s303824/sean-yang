import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../App.css';

export default function ProjectCard({title, subtitle, description, page_link, picture}) {
  const matches = useMediaQuery('(min-width:632px)');
  const isWrap = matches ? "nowrap": "wrap" 
  return (
    <Card sx={{ marginBottom: '16px', backgroundColor:'#282a31'}}>
        <CardContent>

            <Box className="project" sx={{flexWrap:isWrap}}>
              <a href={page_link}>                
                <img src={picture}  alt='thumbnail'width="100%"/>
              </a>
                <Box sx={{display:'flex', flexDirection:'column', marginLeft:'5%', width:"75%"}}>
                    <a href={page_link} className='linkTitle' >
                      <Typography variant='h4' fontFamily={'inconsolata'} color={"#c45148"}>
                        {title}
                      </Typography>
                    </a>
                    <Typography variant='h6' fontFamily={'inconsolata'} color={"white"}>
                    {subtitle}
                    </Typography>
                    <Typography variant="body2" fontFamily={'inconsolata'} color={"white"}>
                    {description}
                    </Typography>
                </Box>

            </Box>

        </CardContent>
    </Card>
  );
}
