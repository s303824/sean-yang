import { Box } from "@mui/material";
import logo from '../profile.jpg';
import '../App.css';

function CircleImage(){
return(
    <Box className="image-container">
        <img src={logo} alt="profile pic"/>
    </Box>
)
}
export default CircleImage