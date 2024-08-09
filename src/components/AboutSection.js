import { Box, Typography } from "@mui/material";
import logo from '../pfp.jpg';
import '../App.css';

function AboutSection(){
    return(
        <Box sx={{display:"flex", flexDirection:"row" , padding:4, justifyContent:"space-evenly"}}>
            <img src={logo} className="App-logo" alt="profile pic" />
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