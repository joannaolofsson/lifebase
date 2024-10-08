import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBlog } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RxAlignBaseline } from "react-icons/rx";
import { StyledH3, StyledP } from '../Styles';
import xIconImg from '../assets/x-letter.png';



const Aside = ({ isActive, toggleAside }) => {
   
  return (
    <StyledAsideContainer $isActive={isActive}>
      <StyledCloseImg onClick={toggleAside} src={xIconImg} alt="close Icon" />
        <StyledIconbar>
          <StyledUlbar>
            <StyledLibar><StyledLink to="/"><BsFillPersonLinesFill size={24}/></StyledLink></StyledLibar>
            <StyledLibar><StyledLink to="/"><FaBlog size={24}/></StyledLink></StyledLibar>
            <StyledLibar><StyledLink to="/"><RxAlignBaseline size={24}/></StyledLink></StyledLibar>
          </StyledUlbar>
        </StyledIconbar>

        <StyledTopicFeed> 
          <StyledTopicUl>
            <StyledTopicLi>
                <StyledH3>Select your areas</StyledH3>
                <StyledP>Pick 1-3 areas</StyledP>
            </StyledTopicLi>
            <StyledTopicLi>
                <StyledH3>Pick your challenge</StyledH3>
                <StyledP>For how long?</StyledP>
            </StyledTopicLi>
            <StyledTopicLi>
                <StyledH3>How can we help you?</StyledH3>
                <StyledP>Tell us how we can support you</StyledP>
            </StyledTopicLi>
          </StyledTopicUl>
        </StyledTopicFeed>
    </StyledAsideContainer>
  );
};

export default Aside;

const StyledAsideContainer = styled.div`
   display: none;
  
  @media only screen and (min-width: 600px) {
    background-color: #4461a5;
    display: grid;
    grid-template-columns: 3em 1fr;
    grid-template-rows: 1fr 1fr 1fr;  
    gap: 1em;
    width: 300px;
    position: fixed;
    right: 0;
    overflow-y: auto;
    z-index: 2;
    transform: ${({ $isActive }) => ($isActive ? 'translateX(0)' : 'translateX(305px)')};
    transition: transform 0.3s ease-in-out;
    grid-area: 'aside';
  }

/*
  @media only screen and (max-width: 599px) {
    display: none;
  }*/
    `;


const StyledCloseImg = styled.img`
    background: none;

  @media only screen and (min-width: 600px) {
    width: 30px;
    position: absolute;
    top: 1.5em;
    right: 1.5em;
    cursor: pointer;
    background: #F48FB1;
    color: white;
    border: none;
    font-size: 1em;
    padding: 3px;
    border-radius: 5px;

}
    &:hover {
        color: lightcoral;
  }
`;


// Denna bar är navigationen //
const StyledIconbar = styled.div`
  display: none;
  
  @media only screen and (min-width: 600px) {
    height: 100vh;
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    background-color: #162037;
    color: #F48FB1;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const StyledUlbar = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLibar = styled.li`
  padding: 5em 1.5em 1.5em 1.5em;
`;

// Add tooltip //
const StyledLink = styled(Link) `
  color: #F48FB1;
`;

// Detta är nyhetsflödet //
const StyledTopicFeed = styled.div`
    height: 100vh;
    grid-area: 1 / 1 / 3 / 2;
    overflow: hidden;
    flex: 1;


  @media only screen and (min-width: 600px) {
    grid-area: 1 / 2 / 3 / 3;
  }
`;

const StyledTopicUl = styled.ul`

  margin: 4em 0 0 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledTopicLi = styled.li`
  width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #4b6cb7;
    background-color: #4b6cb7;
    padding: 1.5em; 
    color: #ddd;

  &:hover {
    cursor: pointer;
  }

  h3 {
    color: inherit;
    margin-bottom: .5em;
  }
  `;