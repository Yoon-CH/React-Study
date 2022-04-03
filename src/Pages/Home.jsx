import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <StudySection>
      <StudyBox>
        <LinkButton to="/Basic">React Basic</LinkButton>
      </StudyBox>
      <StudyBox>
        <LinkButton to="/Hooks">React Hooks</LinkButton>
      </StudyBox>
      <StudyBox>
        <LinkButton to="/Twitter">React Twitter</LinkButton>
      </StudyBox>
    </StudySection>
  );
};
export default Home;

const LinkButton = styled(Link)`
  font-size: large;
  text-decoration: none;
  color: black;
  &:visited {
    text-decoration: none;
    color: black;
  }
  &:hover {
    transform: scale(1.3);
    transition: 0.5s;
  }
`;

const StudyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #0083ff;
`;

const StudySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, cyan, blue);
`;
