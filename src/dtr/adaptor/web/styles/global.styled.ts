import { createGlobalStyle } from "styled-components";
import { ColorCss, ShadowCss } from "./color.styled";
import { FontCss } from "./font.styled";
import { MovementCss } from "./motion.styled";

export const GlobalStyle = createGlobalStyle`
:root{
${FontCss};
${ColorCss};
${ShadowCss};
${MovementCss};
}
html,body,#root{min-height:100%;overflow:hidden}
body{width:100%}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button,figure{margin:0;padding:0;}
fieldset,img{border:0 none;}
dl,ul,ol,menu,li{list-style:none;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
input,select,textarea,button{border-radius:0;vertical-align:middle;}
button{border:0 none;background-color:transparent;cursor:pointer;}
body{background-color:var(--brand_black_1200);direction:ltr;}
body,th,td,input,select,textarea,button{font-size:14px;line-height:1.5;font-family:'Pretendard';
color:var(--brand_gray_100);letter-spacing:-0.01em}
a{color:var(--brand_green_1000);text-decoration:none;&:hover{cursor:pointer;color:var(--brand_green_800)}}
address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal;}
button:disabled{cursor:not-allowed;}

*{
box-sizing:border-box;color:inherit;
&:hover{&::-webkit-scrollbar{background-color:rgba(15,15,15,0.2);width:8px}}
&::-webkit-scrollbar{background-color:rgba(15,15,15,0.1);width:8px}
&::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255,0.4);border-radius:4px;width:8px}
}
`;

export default GlobalStyle;
