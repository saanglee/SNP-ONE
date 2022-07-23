// GlobalFont.ts
import { createGlobalStyle } from "styled-components";
// 각 폰트 파일 import
import FontB from "../static/fonts/SpoqaHanSansNeo-Bold.woff";
import FontR from "../static/fonts/SpoqaHanSansNeo-Regular.woff";
import FontL from "../static/fonts/SpoqaHanSansNeo-Light.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Font_light";
        src: local("Font_light"), url(${FontL}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_regular";
        src: local("Font_regular"), url(${FontR}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_bold";
        src: local("Font_bold"), url(${FontB}) format('woff');
        font-weight: bold;
    }
`;
