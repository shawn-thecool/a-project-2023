import { css } from "styled-components";

export const FontCss = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2)
        format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2)
        format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard Medium"),
      url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2)
        format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2)
        format("woff2");
  }
`;
