import { createGlobalStyle } from "styled-components";
import FontB from "../static/fonts/MaruBuri-Bold.woff";
import FontR from "../static/fonts/MaruBuri-Regular.woff";
import FontL from "../static/fonts/MaruBuri-Light.woff";

import GFontB from "../static/fonts/SpoqaHanSansNeo-Bold.woff";
import GFontR from "../static/fonts/SpoqaHanSansNeo-Regular.woff";
import GFontL from "../static/fonts/SpoqaHanSansNeo-Light.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "font_light";
        src: local("font_light"), url(${FontL}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "font_regular";
        src: local("font_regular"), url(${FontR}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "font_bold";
        src: local("font_bold"), url(${FontB}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "Gfont_light";
        src: local("Gfont_light"), url(${GFontL}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Gfont_regular";
        src: local("Gfont_regular"), url(${GFontR}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Gfont_bold";
        src: local("Gfont_bold"), url(${GFontB}) format('woff');
        font-weight: bold;
    }
`;
