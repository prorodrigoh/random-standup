import React, { useContext } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { speakerListContext } from '../context/standUp.context';

export const StandupList = () => {
    const { speakerList } = useContext(speakerListContext);

    // show all names in the list 
    return (
        <Stack  className='speaker-stack' 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
            {speakerList.map( (speaker, i) => 
                <Chip key={i} className='speaker-chip' size='medium' label={speaker} />)}
        </Stack>
    )
}