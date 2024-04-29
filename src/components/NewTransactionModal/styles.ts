import styled from "styled-components";

export const NewTransactionModalContainer = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1rem;
        height: 3.375rem;
        background: var(--title-bg);
        border: 0;
        border-radius: 0.25rem;
        color: var(--text-body);

        &::placeholder {
            color: var(--text-placeholder)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        height: 3.625rem;
        border: 0;
        border-radius: 0.5rem;
        font-weight: 500;
        background: var(--green);
        color: var(--text-button);
        margin-top: 1.5rem;
        transition: background .2s;

        &:hover {
            background: var(--green-light);
        }
    }
`;