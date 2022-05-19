import { useContext } from 'react';
import { speakerListContext  } from '../context/standUp.context';

export const CurrentSpeaker = () => {
    const { currentSpeaker, speakerList } = useContext(speakerListContext);

    if (currentSpeaker < 0)
            return
    
    return(
        <span>
            {speakerList[currentSpeaker]}
        </span>
    )

};