import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Card, CardContent, Stack } from '@mui/material';


const SingleSearchCardSkeleton = () => {
 

  return (
    <Card sx={{ display: 'flex' }}>
    <Skeleton variant="rectangular" width={126} height={180} animation="wave" />
    
   
    
        <CardContent>
          <Stack spacing={2} alignItems="flex-start" justifyContent="flex-start">
          <Skeleton width="50ch" height="2rem" animation="wave" />
          <Skeleton width="60%" height="1.5rem" animation="wave" />
          <Skeleton width="7ch" height="3.3rem" style={{borderRadius: "20px"}} animation="wave"/>
          
          </Stack>
         
        </CardContent>
        
      
      
    </Card>
    
  );
}

export default SingleSearchCardSkeleton