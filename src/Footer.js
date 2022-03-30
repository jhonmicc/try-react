import React from 'react';
import styled from 'styled-components';

const PFooter = styled.p`
  background-color: #020013;
  color: #ffffff;
  padding: 25px 0;
  font-size: 1.1rem;
  letter-spacing: 3px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <PFooter>Copyright &copy; {today.getFullYear()}</PFooter>
    </footer>
  );
};

export default Footer;
