import { Input } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext  } from '../context/standUp.context';

export const AddNewNameInput = () => {
  const { input, setInput } = useContext(speakerListContext);

  return (
    <Input
      placeholder='Add a temporary Name!'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};