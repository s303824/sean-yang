import { Box, Typography } from "@mui/material";
import logo from '../images/profile.jpg';
import '../App.css';
import CircleImage from "./CircleImage";

function AboutSection(){
    return(
        <Box className="about" sx={{ flexDirection:"row" , padding:4, justifyContent:"space-around"}}>
            <CircleImage image_file={logo}/>
            <Box sx={{marginLeft:2}}>
                <Typography className="subtitle" fontFamily={'inconsolata'} variant="h3">Hello!</Typography>
                <Typography variant="h6" fontFamily={'inconsolata'}>
                    My name is Sean Yang, a software engineer specializing in game programming and web development. 
                </Typography>    
            </Box>

        </Box>
    )
}
export default AboutSection