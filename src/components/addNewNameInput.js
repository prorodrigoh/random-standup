import { TextField } from '@mui/material';
import { useContext } from 'react';
import { speakerListContext  } from '../context/standUp.context';

export const AddNewNameInput = () => {
  const { input, setInput } = useContext(speakerListContext);

  return (
    <TextField
      fullWidth
      helperText='Add a temporary Name!'
      variant="outlined"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};