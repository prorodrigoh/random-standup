import { SpeakerListContextProvider } from './context/standUp.context';
import { StandupList } from './components/standUp';
import { AddNewNameInput } from './components/addNewNameInput';
import { AddNewNameButton } from './components/addNewNameButton';
import { CurrentSpeaker } from './components/currentSpeaker';
import { CallNewSpeakerButton } from './components/callNewSpeaker';

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import './scss/app.scss';

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#131924',
    },
    primary: {
      main: '#4d88ff',
    },
    secondary: {
      main: '#a9a9a9',
    },
  },
});

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SpeakerListContextProvider>
          <section>
            <StandupList />
          </section>
          <section>
            <AddNewNameInput />
            <AddNewNameButton />
          </section>
          <section>
            <CurrentSpeaker />
            <CallNewSpeakerButton />
          </section>
        </SpeakerListContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

// -- >> logic

// From a list of students that we show on screen,
// randomly select one student,
// remove the student from the list,
// show the student in separate
// on click of a button, repeat the process until the list is over

// From an input field,
// add a name to the list of student.

// -- >> styling

// list in rows of five names centered
// field to add new name and a button to add the name
// distinct student shown in red, centered
// button Stand Up in green 