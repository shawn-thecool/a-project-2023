import { createGlobalStyle } from "styled-components";
import { ColorCss, ShadowCss } from "./color.styled";
import { FontCss } from "./font.styled";
import { MovementCss } from "./movement.styled";

export const GlobalStyle = createGlobalStyle`
:root{
${FontCss};
${ColorCss};
${ShadowCss};
${MovementCss};
}
html,body,#root{min-height:100%;overflow:hidden}
body{width:100%;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button,figure{margin:0;padding:0;}
fieldset,img{border:0 none;}
dl,ul,ol,menu,li{list-style:none;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
input,select,textarea,button{border-radius:0;vertical-align:middle;}
button{border:0 none;background-color:transparent;cursor:pointer;}
body{background:#fff;direction:ltr;}
body,th,td,input,select,textarea,button{font-size:14px;line-height:1.5;font-family:'Pretendard';
color:#262626;letter-spacing:-0.01em}
a{color:#3359ff;text-decoration:none;}
address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal;}
button:disabled{cursor:not-allowed;}

*{
box-sizing:border-box;color:inherit;
&::-webkit-scrollbar{display:none;}
&:hover{&::-webkit-scrollbar{background-color:rgba(255,255,255,0.6);display:block;width:10px;}}
&::-webkit-scrollbar{background-color:#000;border:1px solid #d5d5d5;width:10px;height:10px;padding:2px;}
&::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.5);border-radius:6px;margin:2px;width:4px;height:4px;border:2px solid transparent;background-clip:padding-box;}
}

`;

export default GlobalStyle;
