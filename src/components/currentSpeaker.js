import React, { useContext } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { speakerListContext  } from '../context/standUp.context';

export const CurrentSpeaker = () => {
    const { currentSpeakerName } = useContext(speakerListContext);

    if(!currentSpeakerName){
        return <span></span>
    }

    return(
        <Stack  className='speaker-stack' 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Chip className='current-speaker-chip' size='medium' label={currentSpeakerName} />
        </Stack>
    )

};