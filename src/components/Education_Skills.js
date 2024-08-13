import { Box, Typography } from "@mui/material";
import TechnicalSection from './TechnicalSection.js';
import '../App.css';

function Education_Skills(){
    return(
        <Box sx={{display:"block", flexDirection:"column" , alignContent:"space-between", backgroundColor:'black', padding:4}}>
            <Typography variant="h3" className="subtitle" fontFamily={'inconsolata'}>Education and Technical Skills</Typography>

            <Box sx={{ flexDirection:"column" , alignContent:"space-between"}}>
                <Box sx={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
                    <Typography variant="h4" fontFamily={'inconsolata'}>Stony Brook University</Typography> 
                    <Typography variant="h5" fontFamily={'inconsolata'}>Graduated 2023</Typography> 
                </Box>
                <Typography variant="h5" fontFamily={'inconsolata'}>Bachelor of Science in Computer Science</Typography> 
            </Box>

            <TechnicalSection/>
        </Box>
    )
}
export default Education_Skills