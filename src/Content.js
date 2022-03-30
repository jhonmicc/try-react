import React from 'react';
import myimage from './imgsquare.png';
import styled from 'styled-components';

const Container = styled.div`
  color: #ffffff;
  padding: 30px 0;
  text-align: center;
  letter-spacing: 1px;
`;

const Img = styled.img`
  width: 20%;
  border-radius: 10%;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
`;

const CardSubtitle = styled.h6`
  font-size: 1.5rem;
`;

const CardDesc = styled.p`
  font-size: 1.2rem;
`;

const Content = () => {
  return (
    <Container>
      <Img src={myimage} alt="" className="card-image" />
      <CardTitle className="card-title">Jhon Michael Manik</CardTitle>
      <CardSubtitle className="card-subtitle">Malang, Indonesia</CardSubtitle>
      <CardDesc className="card-desc">Frontend Engineer</CardDesc>
    </Container>
  );
};

export default Content;
