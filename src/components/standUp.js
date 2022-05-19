import { List, ListItem } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext  } from '../context/standUp.context';

export const StandupList = () => {
    const { speakerList } = useContext(speakerListContext);

    return (
        <List>
            {speakerList.map((speaker, i) => {
                return (
                 <ListItem key={i}>{speaker}</ListItem>
                );
            })}
        </List>
    );
};