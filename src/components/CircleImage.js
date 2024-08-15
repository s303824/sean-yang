import { Box } from "@mui/material";
import '../App.css';
import useMediaQuery from '@mui/material/useMediaQuery';

function CircleImage({image_file}){
    const matches = useMediaQuery('(min-width:632px)');
    const img_size = matches ? '250vw': '200vh';

    return(
    <Box className="image-container">
        <img src={image_file} height={img_size} alt="profile pic"/>
    </Box>
)
}
export default CircleImage