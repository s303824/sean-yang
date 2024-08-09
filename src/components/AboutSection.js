import { Box, Typography } from "@mui/material";
import CircleImage from './CircleImage';
import '../App.css';

function AboutSection(){
    return(
        <Box className="about" sx={{ flexDirection:"row" , padding:4, justifyContent:"space-around"}}>
            <CircleImage/>
            <Box sx={{marginLeft:2}}>
                <Typography className="subtitle" variant="h3">Software and Game Developer</Typography>
                <Typography >
                    hello :) <br/>
                    I habitually make games for fun. Enjoy!
                </Typography>    
            </Box>

        </Box>
    )
}
export default AboutSection