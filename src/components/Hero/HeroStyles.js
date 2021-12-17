import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 50%;
  padding-right: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const Img = styled.img`
  display: block;
  flex: wrap;
  padding-left: 0;
  padding-right: 0;
  max-width:350px;
  
  object-fit: cover;
  overflow: hidden;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;   
`;
