import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #202024;
        --shape: #29292E;
        --shape2: #323238;

        --title-bg: #121214;
        
        --text-button: #FFF;
        --text-title: #E1E1E6;
        --text-body: #C4C4CC;
        --text-placeholder: #7C7C8A;

        --green-dark: #015F43;
        --green-light: #00b37E;
        --green: #00875F;

        --red: #F75A68;
        --red-dark: #AA2834;

        &.dark {
            --background: #fff;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

        &.light {

        } 
    }

    body {
        background: var(--background);
        color: var(--text-body);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
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
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 535px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter .2s;

        &:hover {
            filter: brightness(1.2);
        }
    }
`