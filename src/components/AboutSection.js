import { Button, Box, Typography } from "@mui/material";
import logo from '../images/new_profile.jpg';
import '../App.css';
import CircleImage from "./CircleImage";
import resume from '../Sean_Yang_resume.pdf'
import useMediaQuery from '@mui/material/useMediaQuery';

function AboutSection(){
    const matches = useMediaQuery('(min-width:632px)');
    const isWrap = matches ? "nowrap": "wrap-reverse";
    const isPaddingApplied = matches ? 4: 0;


    return(
        <Box className="about" sx={{ display:"flex", flexDirection:"row" , flexWrap:isWrap, padding:4, justifyContent:"space-around"}}>
            <Box sx={{paddingRight:isPaddingApplied}}>
                <Typography className="subtitle" fontFamily={'inconsolata'} variant="h3">Hello!</Typography>
                <Typography variant="h6" fontFamily={'inconsolata'}>
                    My name is Sean Yang, a software engineer specializing in game programming (both systems and gameplay) and web development. 
                    I enjoy tackling new challenges and you can contact me at the email address above :)
                </Typography> 
                <Button href={resume} sx={{borderRadius: '0%', border: 'solid',color: 'white',borderColor: 'white',  cursor: 'pointer !important', width:'256px', marginTop:4, marginBottom:4, fontFamily:"inconsolata", fontSize:18}} >
                          My Resume
                      </Button>  
   
            </Box>
            <CircleImage image_file={logo} />

        </Box>
    )
}
export default AboutSection