import styled from 'styled-components';

export const Section = styled.div`
background-size: contain;
background-position: left top;
background-repeat: no-repeat;
position: relative;
padding: 150px 0;
color: #f5f5f5;
background: linear-gradient(#6000dd,#5500c4);

background-attachment: scroll;
background-clip: border-box;
background-color: rgb(0, 123, 255);
background-image: linear-gradient(rgb(96, 0, 221), rgb(85, 0, 196));
background-origin: padding-box;
box-sizing: border-box;
display: block;
font-family: Muli, Helvetica, Arial, "sans-serif";
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  h2 {
    box-sizing: border-box;
color: rgb(245, 245, 245);
font-family: Catamaran, Helvetica, Arial, "sans-serif";
font-size: 70px;
font-weight: 200;
letter-spacing: 1px;
line-height: 84px;
margin-bottom: 8px;
margin-top: 0px;
text-align: center;
  }
`;
