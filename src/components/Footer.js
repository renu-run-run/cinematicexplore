import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Footer = () =>{
    return(

    <Box pb={4}>
        <Typography variant="h5" align="center">Created with ❤️. happy coding </Typography>
        <Typography variant="h6" align="center">Renuka Choudhary </Typography>
         <Typography variant="h6" align="center">
           <a href="https://github.com/renu-run-run/cinematicexplore" target="_blank" rel="noreferrer">Github Source code</a>
        
        </Typography>
    </Box>
  
    )
}

export default Footer