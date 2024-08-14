import { Box, Typography } from "@mui/material";
import '../App.css';
import ProjectCard from './ProjectCard.js'

import ATA_clip from '../images/ata_clips.gif'
import ATA from '../images/ata.png'

import UT from '../images/us_and_them.png'
import UT_clip from "../images/ut_clips.gif"

import DA_clip from "../images/da_clips.gif"
import DA from '../images/devil_advocate.png'

function Projects(){
    const ata_description = "This game is a first person mech shooter developed with a small team for MechJamV. I was responsible for much of the code base, especially UI, enemy AI, and gameplay mechanics."

    const da_description = "Devil’s Advocate is a comedic adventure game inspired by Ace Attorney that I made in under 72 hours with a team of five as part of Ludum Dare 55 Jam."+
     "As one of two programmers working on this game, I was responsible for a majority of the code base including UI implementation, shaders, and a custom dialogue manager to handle dialogue,"+
     " character sounds/animations, and scripted events. The game was highly-rated and received an overall result of 23rd place out of 2194 submissions."
    
     const ut_description = "As part of Stony Brook University’s Ren’Py Competition 2023, my team created a visual novel that won first place in under one week."+
     " I wrote all the Python code using the Ren'Py Visual Novel Engine and co-wrote the story, impressing the judges with its technical merit including Tom Rothamel,"+
     " the creator of Ren'Py."


    return(
        <Box sx={{display:"flex", flexDirection:"column" , padding:4, alignContent:"space-between"}}>
            <Typography variant="h3"className="subtitle" fontFamily={'inconsolata'}>Projects</Typography>
            <Typography variant="h5" sx={{marginBottom:4}} fontFamily={'inconsolata'}>Hover over project for gameplay footage</Typography>
            <Box>
                <ProjectCard title={"All Terrain Armor"} gif={ATA_clip} picture={ATA} subtitle={"Game Programmer"} description={ata_description} page_link={'https://alimen6.itch.io/all-terrain-armor'} />
                <ProjectCard title={"Devil's Advocate"} gif={DA_clip} picture={DA} subtitle={"Game Programmer"} description={da_description} page_link={'https://spectradev.itch.io/devilsadvocate'}/>
                <ProjectCard title={"Us and Them"} gif={UT_clip} picture={UT} subtitle={"Game Programmer"} description={ut_description} page_link={'https://xander1230.itch.io/us-and-them'} />
            </Box>
        </Box>
    )
}
export default Projects