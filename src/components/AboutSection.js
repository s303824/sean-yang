import { Button, Box, Typography } from "@mui/material";
import logo from '../images/profile.jpg';
import '../App.css';
import CircleImage from "./CircleImage";
import resume from '../Sean_Yang_resume.pdf'

function AboutSection(){
    return(
        <Box className="about" sx={{ flexDirection:"row" , padding:4, justifyContent:"space-around"}}>
            <CircleImage image_file={logo}/>
            <Box sx={{marginLeft:2}}>
                <Typography className="subtitle" fontFamily={'inconsolata'} variant="h3">Hello!</Typography>
                <Typography variant="h6" fontFamily={'inconsolata'}>
                    My name is Sean Yang, a software engineer specializing in game programming (both systems and gameplay) and web development. I enjoy tackling new challenges and would love to talk about any job opportunities.
                </Typography> 
                <Button href={resume} sx={{borderRadius: '0%', border: 'solid',color: 'white',borderColor: 'white',  cursor: 'pointer !important', width:'256px', marginTop:4, marginBottom:4, fontFamily:"inconsolata"}} >
                          My Resume
                      </Button>  
   
            </Box>

        </Box>
    )
}
export default AboutSection