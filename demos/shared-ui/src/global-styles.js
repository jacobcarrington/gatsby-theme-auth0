import React from "react";
import { Global, css } from "@emotion/core";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          background: #000;
          color: #fff;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
            "Helvetica Neue", "Arial", "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
          letter-spacing: 0.1px;
          -webkit-font-smoothing: antialiased;
        }

        p {
          margin-bottom: 1.5rem;
        }
      `}
    />
  );
};
