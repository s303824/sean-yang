import { Box, Typography } from "@mui/material";
import TechnicalSection from './TechnicalSection.js';
import '../App.css';
import CredentialSection from './CredentialSection.js'

function Education_Skills(){
    return(
        <Box sx={{display:"block", flexDirection:"column" , alignContent:"space-between", px:4, py:2, borderTop: '1px solid white', borderBottom: '1px solid white'}}>
            <Typography variant="h4" className="subtitle" fontFamily={'roboto'}>EDUCATION AND TECHNICAL SKILLS</Typography>

            <Box sx={{ flexDirection:"column" , alignContent:"space-between"}}>
                <Box sx={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
                    <Typography variant="h6" fontFamily={'roboto'}>Stony Brook University</Typography> 
                    <Typography variant="h6" fontFamily={'roboto'}>Graduated 2023</Typography> 
                </Box>
                <Typography fontFamily={'roboto'}>Bachelor of Science in Computer Science</Typography> 
            </Box>
            <TechnicalSection/>
        <Typography variant="h5" fontFamily={'roboto'}>Certifications</Typography>
        <CredentialSection/>

        </Box>
    )
}
export default Education_Skills