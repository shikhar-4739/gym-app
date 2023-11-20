import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: "0" } }}>

      <Typography 
      sx={{ fontSize: { lg:'44px', xs:'25px'},mt: {lg:'20px', xs:'50px'} ,ml:'20px'}} mb="33px" fontWeight={700} >Similar <span style={{ color:'#ff2625'}}>Target Muscle</span> Exercises
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />}
      </Stack>

      <Typography 
     sx={{ fontSize: { lg:'44px', xs:'25px'}, ml:'20px'}} mb="33px" mt="20px" fontWeight={700}>Similar <span style={{ color:'#ff2625'}}>Equipment</span> Exercises
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length !== 0 ?
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
