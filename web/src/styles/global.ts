import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    min-height: 100%;
  }

  body {
    max-width: 100vw;
    background: ${({ theme }) => theme.colors.background};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    ${({ theme }) => theme.colors.textTitle};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Toastify {
    font-size: 16px;
  }

  .react-modal-content {
    width: 100%;
    max-width: 57.6rem;
    background: ${({ theme }) => theme.colors.shape};

    padding: 4.8rem;
    position: relative;
    border-radius: ${({ theme }) => theme.radii.default}
  }

  .react-modal-close {
    position: absolute;
    right: 2.4rem;
    top: 2.4rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3D3C42;
    border-radius: 3px;
    cursor: move;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }
`;
