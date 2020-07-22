import React from "react";
import styled from '@emotion/styled';

const QuoteContainer = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  
  @media (min-width: 768px){
    margin-top: 10rem;
  }

  h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before{
      content: open-quote;
      font-size: 10rem;
      color: #000;
      position: absolute;
      top: -3rem;
      left: -1rem;
    }
  }

  p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: 700;

    &::before{
      content: '- '
    }
  }
`;

const Quote = ({ quote }) => {

  if(Object.keys(quote). length === 0) return null;

  return (
    <QuoteContainer>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </QuoteContainer>
  );
};

export default Quote;
