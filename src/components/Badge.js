import { Box, Typography } from "@mui/material";

export default function Badge({subject}) {
    return(
    <Box className='badge'>
        <Typography fontFamily={'inconsolata'} variant="h7">
            {subject}
        </Typography>
    </Box>
    );
}