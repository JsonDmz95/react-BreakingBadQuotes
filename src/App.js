import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Quote from './Components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  background: linear-gradient(45deg , #007d35 0%, #0f574e 100%);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover{
    opacity: 0.75;
  }
`;

function App() {

  //quotes State
  const [quote, updateQuote] = useState({});

  const readAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    const quote = await api.json();
    updateQuote(quote[0]);

  }

  //load an initial quote
  useEffect(() => {
    readAPI();
  }, []);

  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={readAPI}
      >Get Quote</Button>
    </Container>
  );
}

export default App;
