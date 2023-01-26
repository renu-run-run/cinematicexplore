import { Box, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from "../components/FavrouriteMovieCard";


const Home = () =>{
    const [favourites] = useLocalStorage("favourites", "[]");
    return(
        <>
        <Box p={4}>
        <Typography variant="h5" textAlign="center">Welcom to my collection</Typography>
        <hr />
        <br />
        
        <Masonry columns={4} spacing={5} >
              {JSON.parse(favourites).map((e,i) =>{
                return <FavouriteMovieCard id={e} key={i}/>
              })}
        </Masonry>
        
       
        </Box>
        
        
        </>
        

    )
}

export default Home