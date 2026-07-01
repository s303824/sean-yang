import { Box } from "@mui/material";
import '../App.css';
import Badge from "./Badge";

function TechnicalSection(){
    return(
        <Box className='badge-list'>
            <Badge subject={"Godot"}/>
            <Badge subject={"Unity"}/>
            <Badge subject={"HTML/CSS/JS"}/>
            <Badge subject={"React.js"}/>
            <Badge subject={"Node.js"}/>
            <Badge subject={"Express"}/>
            <Badge subject={"MySQL/MongoDB/ORM"}/>
            <Badge subject={"Python"}/>
            <Badge subject={"C++"}/>
            <Badge subject={"Java"}/>
            <Badge subject={"Troubleshooting"}/>
            <Badge subject={"System Administration"}/>
            <Badge subject={"Git/GitHub"}/>
            <Badge subject={".NET(C#)"}/>
            <Badge subject={"Typescript"}/>
            <Badge subject={"pandas/Plotly/Dash"}/>
            <Badge subject={"CI/CD"}/>
        </Box>
    )
}
export default TechnicalSection