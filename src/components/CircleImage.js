import { Box } from "@mui/material";
import logo from '../profile.jpg';
import '../App.css';

function CircleImage(){
return(
    <Box  className="App-logo" >
        <img src={logo} alt="profile pic"/>
    </Box>
)
}
export default CircleImage