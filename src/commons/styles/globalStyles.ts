// 전역 스타일
import { css } from "@emotion/react";


// interface IPropsIsActive{
//   isActive : boolean
// }

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  body,html{
    background-color: #1b1b1b;
    color: #f1f1f1;
  }

  input{
    background-color: #676767;
    border: none;
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
