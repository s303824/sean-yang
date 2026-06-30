import { Button, Box, Typography } from "@mui/material";
import logo from '../images/new_profile.jpg';
import '../App.css';
import CircleImage from "./CircleImage";
import resume from '../Sean_Yang_resume.pdf'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";

function AboutSection(){
    const matches = useMediaQuery('(min-width:632px)');
    const isWrap = matches ? "nowrap": "wrap-reverse";
    const isPaddingApplied = matches ? 4: 0;
    const [hover, setHover] = useState(false)

    function resumeMouseEvent(){
        setHover(!hover)
    }

    return(
        <Box className="about" sx={{ display:"flex", flexDirection:"row" , flexWrap:isWrap, px:4, py:1, justifyContent:"space-between"}}>
            <Box sx={{paddingRight:isPaddingApplied}}>
                <Typography className="subtitle" fontFamily={'roboto'} variant="h4">Hello!</Typography>
                <Typography fontFamily={'roboto'}>
                    My name is Sean Yang, a graduate from Stony Brook University with a passion for full-stack web development and game programming. 
                    I love tackling new challenges and you can contact me anytime at the email address above :)
                </Typography> 
                <Button href={resume} onMouseEnter={resumeMouseEvent} onMouseLeave={resumeMouseEvent} sx={{
                    borderRadius: '0%', color: 'white', border:"1px solid white",  cursor: 'pointer !important', width:'256px', my:2, fontFamily:"roboto",
                    '&:hover':{
                        color:"#0c1536",
                        backgroundColor:"white",
                    }
                    }} >
                          My Resume
                      </Button>  
            </Box>
            <CircleImage image_file={logo} />

        </Box>
    )
}
export default AboutSection