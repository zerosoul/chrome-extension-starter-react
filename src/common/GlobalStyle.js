import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior:smooth;
  }
  body{
    overflow:overlay;
    transition:background-image 1s;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-width:500px;
    min-height:600px;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    /* overflow:hidden; */
    margin:0 auto;
    position: relative;
    min-height: 100%;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
    font-family: PingFangSC-Regular, PingFang SC;

  }
  input,textarea{
    /* 去除safari内阴影 */
    -webkit-appearance: none;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 55px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 60px;
      }
  }

  @media screen and (min-width: 768px){
      html {
          font-size: 65px;
      }
  }
  @media screen and (min-width: 1000px){
      html {
          font-size: 70px;
      }
  }
  @media screen and (min-width: 1200px){
      html {
          font-size: 85px;
      }
  }
  @media screen and (min-width: 1400px){
      html {
          font-size: 95px;
      }
  }
  @media screen and (min-width: 1920px){
      html {
          font-size: 100px;
      }
  }
`;

export default GlobalStyle;
