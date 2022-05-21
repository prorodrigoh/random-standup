import { Button } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext } from '../context/standUp.context';

export const CallNewSpeakerButton = () => {

    const { speakerList, setSpeakerList, currentSpeakerName, setCurrentSpeakerName  } = useContext(speakerListContext);
    
    const onClick = () => {
        const index = randomSpeaker(speakerList)
        removeItem(index)
    }

    const randomSpeaker = (arr) => {
        const speakerIndex = randomIndex(arr.length)
        setCurrentSpeakerName(arr[speakerIndex])
        return speakerIndex
    }
    
    const randomIndex = (num) => {
        const newIndex = Math.floor(Math.random() * num)
        return newIndex
    }

    const removeItem = (speakerIndex) => {
        if (speakerIndex > -1) {
            const newList = speakerList.filter(speaker => speaker !== speakerList[speakerIndex] )
            console.log(newList)
            setSpeakerList(newList)
        }
    }
    return (
        (speakerList.length > 0)
            ? <Button onClick={onClick}>Call a speaker</Button>
            : <Button >Call a speaker</Button>
    )
}


