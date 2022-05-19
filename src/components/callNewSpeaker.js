import { Button } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext } from '../context/standUp.context';

export const CallNewSpeakerButton = () => {

    const { speakerList, setSpeakerList, currentSpeaker, setCurrentSpeaker } = useContext(speakerListContext);
    
    const randomSpeaker = (arr) => {
        const speakerIndex = randomIndex(arr.length)
        setCurrentSpeaker(speakerIndex)
    }

    const randomIndex = (num) => {
        const newIndex = Math.floor(Math.random() * num)
        return newIndex
    }

    const removeItem = (ind) => {
        speakerList.splice(ind, 1)
        setSpeakerList([...speakerList])
    }

    const onClick = () => {
        removeItem(currentSpeaker)
        randomSpeaker(speakerList)
    }

    return (
        <Button onClick={onClick}>Call a speaker</Button>
    )

}


