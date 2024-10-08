import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../App.css';

export default function ProjectCard({title, subtitle, description, list,  page_link, gif, picture}) {
  const matches = useMediaQuery('(min-width:632px)');
  const isWrap = matches ? "nowrap": "wrap";
  const img_size = matches? "360px": "100%";

  return (
    <Card sx={{ marginBottom: '16px', backgroundColor:'#282a31'}} onMouseEnter={()=>{document.getElementById(title).src=gif }} onMouseLeave={()=>{document.getElementById(title).src=picture }}>
        <CardContent>

            <Box className="project" sx={{flexWrap:isWrap}}>
                <img id={title} src={picture} alt='thumbnail'width={img_size} height="286px" />
                <Box sx={{display:'flex', flexDirection:'column', marginLeft:'5%', width:"75%"}}>
                    <a href={page_link} className='linkTitle' >
                      <Typography variant='h4' fontFamily={'inconsolata'} color={"#c45148"}>
                        {title}
                      </Typography>
                    </a>
                    <Typography variant='h6' fontFamily={'inconsolata'} color={"#91fdc3"}>
                    {subtitle}
                    </Typography>
                    <Typography variant="body0" fontFamily={'inconsolata'} color={"white"}>
                    {description}
                    </Typography>
                    <Typography variant="body2" fontFamily={'inconsolata'} color={"white"}>
                    {list}
                    </Typography>
                </Box>

            </Box>

        </CardContent>
    </Card>
  );
}
