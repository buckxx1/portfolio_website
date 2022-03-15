import styled from "styled-components"

export const ArtBody = styled.div`
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden; 
    margin: 0;
   
`

export const ArtCon = styled.div`
  display: flex;
  width: 90vw;

`

export const ArtPanel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  z-index: 1;
  position: relative;
  transition: all 1000ms ease-in;
  &:hover {
    flex: 8;
  }
}
`

export const ArtPanelActive = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  z-index: 0;
  position: relative;
  transition: all 700ms ease-in;
  
}
`

export const ArtH3 = styled.h4`
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    z-index: 2;
    opacity: 0;  
`

export const ArtH3Active = styled.h4`
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    z-index: 2;
    opacity: 0;  
`


