import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div {
        background: var(--shape2);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            color: var(--text-title);
        }

        &.highlight-background {
            background: var(--green);
        }
    }
`;