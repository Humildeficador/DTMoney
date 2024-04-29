import styled from "styled-components"

export const HeaderContainer = styled.header`
    background: var(--title-bg);
    width: 100%;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        background: var(--green);
        color: var(--text-button);
        padding: 0 1rem;
        height: 3rem;
        font-weight: 500;
        border: 0;
        border-radius: 0.25rem;

        transition: background 0.2s;

        &:hover {
            background: var(--green-light);
        }
    }
`;