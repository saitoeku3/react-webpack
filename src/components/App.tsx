import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Button } from './atoms/Button';

export const App: FC = () => {
  const [input, setInput] = useState<string>('world');

  const updateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <LocalStateArea>
        <h2>hello {input}</h2>
        <input type="text" value={input} onChange={updateMessage} />
      </LocalStateArea>
      <Button>Click!</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
`;

const LocalStateArea = styled.div`
  margin-bottom: 20px;
`;
