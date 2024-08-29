import styled from "styled-components";

export const ItemContainer = styled.div `

  width: 80%;
  
  h3 {
    font-size: 32px;
    color: #FAFAFA;
  }

  p {
    font-size: 12px;
    color: #FAFAFA60;
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    color: #FAFAFA60;
    margin: 20px 0;
  }

  .remover {
    background-color: #FF0040;
    margin-top: 25px;
    padding: 12px 15px;
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    transition: background-color .2s ease;

    &:hover {
      background-color: #FF0000;
    }
  }
`