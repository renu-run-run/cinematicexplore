import { Card, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";

const Loader = _ =>{
    return(
        <Card>
          <Stack p={2} alignItems="center">
            <CircularProgress align="center"/>
          </Stack>
        </Card>
        
        
    );
}

export default Loader