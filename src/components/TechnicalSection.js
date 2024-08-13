import { Box } from "@mui/material";
import '../App.css';
import Badge from "./Badge";

function TechnicalSection(){
    return(
        <Box className='badge-list'>
            <Badge subject={"MERN Stack"}/>
            <Badge subject={"Godot"}/>
            <Badge subject={"Unity"}/>
            <Badge subject={"Python"}/>
            <Badge subject={"Java"}/>
            <Badge subject={"Git"}/>
            <Badge subject={"Javascript/Typescript"}/>
        </Box>
    )
}
export default TechnicalSection