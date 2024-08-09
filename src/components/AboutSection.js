import { Box, Typography } from "@mui/material";
import logo from '../profile.jpg';
import '../App.css';

function AboutSection(){
    return(
        <Box sx={{display:"flex", flexDirection:"row" , padding:4, justifyContent:"space-around"}}>
            <Box  className="App-logo" sx={{borderRadius: '50%' ,overflow:'hidden', backgroundClip:'border-box'}}>
                <img src={logo} className="App-logo"alt="profile pic"/>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Typography variant="h3">Software and Game Developer</Typography>
                <Typography>
                    hello :) <br/>
                    I habitually make games for fun. Enjoy!
                </Typography>    

            </Box>
        </Box>
    )
}
export default AboutSection