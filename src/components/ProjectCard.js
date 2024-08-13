import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ProjectCard({title, subtitle, description, page_link, picture}) {
  const matches = useMediaQuery('(min-width:632px)');
  const isWrap = matches ? "nowrap": "wrap" 
  return (
    <Card sx={{ marginBottom: '16px', backgroundColor:'grey'}}>
        <CardContent>

            <Box className="project" sx={{flexWrap:isWrap}}>
              <a href={page_link}>                
                <img src={picture}  alt='thumbnail'width="100%"/>
              </a>
                <Box sx={{display:'flex', flexDirection:'column', marginLeft:'5%', width:"75%"}}>
                    <a href={page_link}  fontFamily={'inconsolata'} sx={{color: "#c45148"}}>
                      <Typography variant='h4'>
                        {title}
                      </Typography>
                    </a>
                    <Typography variant='h6' fontFamily={'inconsolata'}>
                    {subtitle}
                    </Typography>
                    <Typography variant="body2" fontFamily={'inconsolata'}>
                    {description}
                    </Typography>
                </Box>

            </Box>

        </CardContent>
    </Card>
  );
}
