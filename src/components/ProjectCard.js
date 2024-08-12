import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea  from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({title, subtitle, description, page_link, picture}) {
  return (
    <Card sx={{ minWidth: 350, marginBottom: '16px', backgroundColor:'grey'}}>
      <CardActionArea  href={page_link}>
        <CardContent>
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <img src={picture} height={128}/>
                <Box sx={{display:'flex', flexDirection:'column', marginLeft:'16px'}}>
                    <Typography gutterBottom variant='h4' fontFamily={'inconsolata'}>
                    {title}
                    </Typography>
                    <Typography variant='h6' fontFamily={'inconsolata'}>
                    {subtitle}
                    </Typography>
                    <Typography variant="body2" fontFamily={'inconsolata'}>
                    {description}
                    </Typography>
                </Box>
            </Box>
        </CardContent>
      </CardActionArea >
    </Card>
  );
}
