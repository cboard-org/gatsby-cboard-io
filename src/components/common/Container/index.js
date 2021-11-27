import styled from 'styled-components';

export const Container = styled.div`
box-sizing: border-box;
width: 960px;
box-sizing: border-box;
color: rgb(245, 245, 245);
display: flex;
flex-wrap: wrap;
font-family: Muli, Helvetica, Arial, "sans-serif";
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: center;
flex-basis: 66.6667%;
flex-grow: 0;
flex-shrink: 0;
line-height: 24px;
margin-left: 160px;
margin-right: 160px;
max-width: 66.6667%;
padding-left: 15px;
padding-right: 15px;
position: relative;
text-align: center
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
