import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Badge({subject}) {
    
    return(
    <Box className='badge'>
        <Typography fontFamily={'roboto'} sx={{textAlign:"center"}} >
            {subject}
        </Typography>
    </Box>
    );
}