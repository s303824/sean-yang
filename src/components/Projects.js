import { Box, Typography } from "@mui/material";
import '../App.css';

function Projects(){
    return(
        <Box sx={{display:"flex", flexDirection:"column" , padding:4, alignContent:"space-between"}}>
            <Typography variant="h3" sx={{marginBottom:4}}>Projects</Typography>
            <iframe frameborder="0" src="https://itch.io/embed/2838583?linkback=true&amp;border_width=5&amp;bg_color=f2e58f&amp;fg_color=2a2e46&amp;link_color=d11b1b&amp;border_color=f33d3d" width="80%"><a href="https://alimen6.itch.io/all-terrain-armor">All Terrain Armor by Alimen6, Tobekko, That Worm, BirdNews, Other OTHER Sean, Spinny_Triangle</a></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/1974736?linkback=true&amp;border_width=5&amp;bg_color=151534&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=434343" width="80%"><a href="https://xander1230.itch.io/us-and-them">Us and Them by Xander1230, suavior, Other OTHER Sean</a></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/2642280?linkback=true&amp;border_width=5&amp;bg_color=141414&amp;fg_color=e5e5e5&amp;link_color=FF000B&amp;border_color=ffffff" width="80%"><a href="https://spectradev.itch.io/devilsadvocate">Devil's Advocate by SpectraDev, KyoryuZain, Other OTHER Sean</a></iframe>
        </Box>
    )
}
export default Projects