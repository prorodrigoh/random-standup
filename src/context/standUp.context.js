import { createContext, useState } from 'react';

export const speakerListContext = createContext({});

export const SpeakerListContextProvider = ({ children }) => {

  let speakerNames = ['KJ','Chole','Maria','Rodrigo','Carlie','Cherie','Aner','Arthur',
  'Jenna','Lud','Hanna','Nerissa','Sebastian','Miguel','Josh','Todd',
  'Brahm','Alex','Stephanie','Neil','Wade','Sebas']

  const { Provider } = speakerListContext;

  const [input, setInput] = useState('');
  const [speakerList, setSpeakerList] = useState(speakerNames);         //array
  const [currentSpeakerName, setCurrentSpeakerName] = useState('');     //name
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(-1);   //counter
  
  const value = {
    input, setInput,
    speakerList, setSpeakerList,
    currentSpeakerIndex, setCurrentSpeakerIndex,
    currentSpeakerName, setCurrentSpeakerName,
  };
  
  return <Provider value={value}>{children}</Provider>;
};