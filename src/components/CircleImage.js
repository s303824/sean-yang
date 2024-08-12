import { Box } from "@mui/material";
import '../App.css';

function CircleImage({image_file}){
    return(
    <Box className="image-container">
        <img src={image_file} alt="profile pic"/>
    </Box>
)
}
export default CircleImage