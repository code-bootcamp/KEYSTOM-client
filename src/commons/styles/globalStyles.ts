// 전역 스타일
import { css } from "@emotion/react";


// interface IPropsIsActive{
//   isActive : boolean
// }

export const globalStyles = css`
  * {
    font-family: 'Quicksand';
    font-style: normal;
  }

    @font-face {
      font-family:"Quicksand" ;
      src: url(/font/Quicksand-Medium.ttf);
    }

  body,html{
    background-color: #1b1b1b;
    color: #f1f1f1;
  }

  input{
    border: 1px solid #fff;
    ::placeholder{
      color:#b1b1b1 ;
    }
  }

  button{
    border: none;
    border-radius: 10px;
    background-color: #B150F2;
    cursor: pointer;
  }
`;
