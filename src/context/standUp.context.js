import { createContext, useState } from 'react';

export const speakerListContext = createContext({});

export const SpeakerListContextProvider = ({ children }) => {

  let speakerNames = ['KJ','Cholie','Maria','Rodrigo','Carlie','Cherrie','Aaran','Arthur',
  'Jenna','Lud','Hanna','Nerissa','Sebastian','Miguel','Josh','Todd',
  'Brahm','Alex','Stephanie','Neil','Wade','Sebastian']

  const { Provider } = speakerListContext;

  const [input, setInput] = useState('');
  const [speakerList, setSpeakerList] = useState(speakerNames);
  const [currentSpeaker, setCurrentSpeaker] = useState(-1);

  const value = {
    input, setInput,
    speakerList, setSpeakerList,
    currentSpeaker, setCurrentSpeaker,
  };
  
  return <Provider value={value}>{children}</Provider>;
};