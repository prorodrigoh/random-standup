import { Button } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext  } from '../context/standUp.context';


export const AddNewNameButton = () => {
    const { input, setInput, speakerList, setSpeakerList } = useContext(speakerListContext);


  const onClick = () => {
    if (!input) {
      return;
    }
    const newList = [...speakerList, input];
    setSpeakerList(newList);
    setInput('');
  };

  return (
      <Button onClick={onClick}>Add New Name</Button>
  );
};