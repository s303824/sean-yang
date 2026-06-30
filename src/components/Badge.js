import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Badge({subject}) {
    const [hover, setHover] = useState(false)

    function resumeMouseEvent(){
        setHover(!hover)
    }
    
    return(
    <Box className='badge' sx={{'&:hover':{
            color:"#0c1536",
            backgroundColor:"white",
        }}}>
        <Typography fontFamily={'roboto'} >
            {subject}
        </Typography>
    </Box>
    );
}