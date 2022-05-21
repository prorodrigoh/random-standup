import { createContext, useState } from 'react';

export const speakerListContext = createContext({});

export const SpeakerListContextProvider = ({ children }) => {

  let speakerNames = ['KJ','Cholie','Maria','Rodrigo','Carlie','Cherrie','Aaran','Arthur',
  'Jenna','Lud','Hanna','Nerissa','Sebastian','Miguel','Josh','Todd',
  'Brahm','Alex','Stephanie','Neil','Wade','Sebastian']

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