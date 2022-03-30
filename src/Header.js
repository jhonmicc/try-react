import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  padding-top: 2rem;
  text-align: center;
  font-size: 3.5rem;
  color: #ffffff;
`;

const Header = () => {
  return (
    <header>
      <H1>👋Hi All</H1>
    </header>
  );
};

export default Header;
