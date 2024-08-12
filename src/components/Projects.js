import { Box, Typography } from "@mui/material";
import '../App.css';
import ProjectCard from './ProjectCard.js'

import ATA from '../images/ata.png'
import UT from '../images/us_and_them.png'
import DA from '../images/devil_advocate.png'

function Projects(){
    return(
        <Box sx={{display:"flex", flexDirection:"column" , padding:4, alignContent:"space-between"}}>
            <Typography variant="h3"className="subtitle" sx={{marginBottom:4}} fontFamily={'inconsolata'}>Projects</Typography>
            <ProjectCard title={"All Terrain Armor"} subtitle={"Game Programmer"} description={"Stuff"} page_link={'https://alimen6.itch.io/all-terrain-armor'} picture={ATA}/>
            <ProjectCard title={"Devil's Advocate"} subtitle={"Game Programmer"} description={"Things"} page_link={'https://xander1230.itch.io/us-and-them'} picture={DA}/>
            <ProjectCard title={"Us and Them"} subtitle={"Game Programmer"} description={"Activities"} page_link={'https://spectradev.itch.io/devilsadvocate'} picture={UT}/>
        </Box>
    )
}
export default Projects