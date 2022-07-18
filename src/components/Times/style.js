import styled from "styled-components";

export const GeralContainer = styled.div`
margin:auto;
max-width:80%;
min-width:80%;
display:flex;
flex-direction:row;

overflow-x: scroll;
`
export const Table = styled.div`
margin-top:20px;
margin-bottom:20px;
min-width:100%;
display:grid;
grid-template-columns: 20% 70%;
row-gap:10px;
justify-content:space-between;
align-content:center;
color:white;
`
export const FirstLine1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:50px;
background-color:rgba(255, 255, 255, 0.19);
`
export const FirstLine1DarkMode = styled(FirstLine1)`
background-color:rgba(41, 151, 116, 0.44);
`
export const FirstLine2 = styled.div`
transition: all 0.9s linear;
display:flex;
align-items:center;
justify-content:center;
height:50px;
background-color:rgba(255, 255, 255, 0.19);
`
export const FirstLine2DarkMode = styled(FirstLine1)`
transition: all 0.9s;
background-color:rgba(41, 151, 116, 0.44);
`
export const Column1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:50px;
color:white;
`
export const Column2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:50px;
border: 1px solid #FFFFFF;
`
export const Column2Destaque = styled.div`
background-color:#FFFFFF;
color:black;
display:flex;
align-items:center;
justify-content:center;
height:50px;
`
export const Button = styled.button`
height:20px;
background-color:rgba(255, 255, 255, 0);
border-style:none;
font-size:20px;
color:#FFFFFF;
`