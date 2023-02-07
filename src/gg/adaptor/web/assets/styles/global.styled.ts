import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/** font-face */
@font-face {font-family: "Pretendard";font-weight: 400;font-display: swap;src: local("Pretendard Regular"), url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2) format("woff2");}
@font-face {font-family: "Pretendard";font-weight: 500;font-display: swap;src: local("Pretendard Medium"), url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2) format("woff2");}
@font-face {font-family: "Pretendard";font-weight: 600;font-display: swap;src: local("Pretendard Medium"), url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2) format("woff2");}
@font-face {font-family: "Pretendard";font-weight: 700;font-display: swap;src: local("Pretendard Bold"), url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2) format("woff2");}
/** root variables */
:root {
  --head-h:64px;
  --ex:#444;
  --ex-ba:rgba(0,0,0,0.5);
  --ex-wa:rgba(255,255,255,0.5);
  --motion-ease: cubic-bezier(0.05, 0, 0, 1);
}
/** reset */
html, body, #__next {min-height: 100%;overflow: hidden;}
body {
  width: 100%;
  font-family: "Pretendard";color:var(--ex);font-size: 14px;line-height: 1.5;
}
fieldset, img {border: 0 none;}
dl, ul, ol, menu, li {list-style: none;}
blockquote, q {
  quotes: none;
  &::before, &::after{content:"";content:none}
}
address, caption, cite, code, dfn, em, var {font-style: normal;font-weight: normal;}
input, select, textarea, button {border-radius: 0;vertical-align: middle;}
button {
  border: 0 none;background-color: transparent;cursor: pointer;
  &:disabled {cursor: not-allowed;}
}
a{
  text-decoration: none;
  color:blue;
  &:hover{cursor:pointer}
}
* {
  margin: 0;padding: 0;;box-sizing: border-box;color: inherit;
}
`;

export default GlobalStyle;
