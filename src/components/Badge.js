import { Box, Typography } from "@mui/material";

export default function Badge({subject}) {
    return(
    <Box className='badge'>
        <Typography fontFamily={'inconsolata'}>
            {subject}
        </Typography>
    </Box>
    );
}