import React, { useState } from 'react';
import { Wrapper, Label, List, ListItem, Icon } from './jobInput.style';

const JobInput = ({
  value, options, name, onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Label onClick={() => setIsOpen(!isOpen)}>{value} <Icon src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/dropdow-icon.svg" /></Label>
      <List isOpen={isOpen}>
        {options.map((op) => (
          <ListItem
            onClick={() => {
              onChange({target: { value: op, id: name }});
              setIsOpen(!isOpen);
            }}
          >
            {op}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default JobInput;