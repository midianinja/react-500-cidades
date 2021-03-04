import React, { useContext, useEffect, useState, useCallback } from 'react';
import { TextWithFocus } from './dynamicText.style';

const placesChange = ['sua quebrada', 'seu role', 'seu trampo', 'sua vida', 'sua comunidade', 'seu projeto'];


const DynamicText = () => {
  const [newString, setNewString] = useState(placesChange[0]);

  const shuffle = useCallback(() => {
    const stringShuffle = Math.floor(Math.random() * placesChange.length);
    setNewString(placesChange[stringShuffle]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 1500);
      return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <TextWithFocus>{newString}</TextWithFocus>
  );
}

export default DynamicText;