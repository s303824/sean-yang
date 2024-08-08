import { Box, Typography } from "@mui/material";
import logo from '../pfp.jpg';
import '../App.css';

function Education_Skills(){
    return(
        <Box sx={{display:"flex", flexDirection:"column" , padding:4, alignContent:"space-between"}}>
            <Box sx={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
                <Typography variant="h4">Stony Brook Univerity</Typography> 
                <Typography variant="h5">Graduated 2023</Typography> 
            </Box>
            <Typography variant="h5">Bachelor of Science in Computer Science</Typography> 
            <Typography >Blah Blah Blah</Typography> 


        </Box>
    )
}
export default Education_Skills