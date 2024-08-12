import { Box, Typography } from "@mui/material";
import logo from '../images/profile.jpg';
import '../App.css';
import Badge from "./Badge";

function TechnicalSection(){
    const img_size = '64px'
    return(
        <Box className='badge-list'>
            <Badge subject={"MERN Stack"}/>
            <Badge subject={"Godot"}/>
            <Badge subject={"Unity"}/>
            <Badge subject={"Python"}/>
            <Badge subject={"Java"}/>
            <Badge subject={"Javascript/Typescript"}/>
            <Badge subject={"Git"}/>
        </Box>
    )
}
export default TechnicalSection