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
    const ata_description = "A first person mech shooter developed with a small team for MechJamV.";
    const ata_list = 
    <ul>
        <li>Implemented the UI / menu including a radar minimap to enemies and player direction</li>
        <li>Organized a behavior tree for enemies to handle idle behavior, attack movements, shooting, animations, and sfx</li>
        <li>Set up particle effects using Godot engine systems</li>
        <li>Programmed tank control movements with independent upper/lower torso rotation</li>
        <li>Created a music manager for handling music changes and smooth transitions during game events</li>
        <li>Made a physics gun for throwing prop objects, dealing damage to enemies on impact</li>
        <li>Developed a level manager for handling smooth fade-to-black scene transitions</li>
    </ul>

    const da_description = "A comedic narrative-driven game inspired by Ace Attorney made with a team of five as"+
    " part of Ludum Dare 55 Jam. The game was highly-rated and received an overall result of 23rd place out of 2194 submissions.";
    
    const da_list = 
    <ul>
        <li>Created a custom dialogue manager that handled dialogue and could emit custom modular 
            signals for in-game events such as character speech sounds & animations, entering/leaving of sprites on screen, camera cuts, etc.</li>
        <li>Organized 2D level layout</li>
        <li>Made particle effects using Godot engine systems</li>
        <li>Implemented the UI / menu including settings</li>
    </ul>

     const ut_description = "A visual novel created for Stony Brook University’s Ren’Py Competition 2023. The game won first place"+
     " and its technical merit impressed the judges including Tom Rothamel, the creator of Ren'Py.";
     const ut_list = 
     <ul>
         <li>Programmed the entire code base including multiple concurrent text boxes for different voices, UI / menu  implementation, and in-engine animations 
         </li>
         <li>Co-wrote the story</li>
     </ul>

    return(
        <Box sx={{display:"flex", flexDirection:"column" , padding:4, alignContent:"space-between"}}>
            <Typography variant="h3"className="subtitle" fontFamily={'inconsolata'}>Projects</Typography>
            <Typography variant="h5" sx={{marginBottom:4}} fontFamily={'inconsolata'}>Hover over project for gameplay footage</Typography>
            <Box>
                <ProjectCard title={"All Terrain Armor"} gif={ATA_clip} picture={ATA} subtitle={"Game Programmer"} description={ata_description} list={ata_list} page_link={'https://alimen6.itch.io/all-terrain-armor'} />
                <ProjectCard title={"Devil's Advocate"} gif={DA_clip} picture={DA} subtitle={"Game Programmer"} description={da_description} list={da_list} page_link={'https://spectradev.itch.io/devilsadvocate'}/>
                <ProjectCard title={"Us and Them"} gif={UT_clip} picture={UT} subtitle={"Game Programmer"} description={ut_description} list={ut_list} page_link={'https://xander1230.itch.io/us-and-them'} />
            </Box>
        </Box>
    )
}
export default Projects