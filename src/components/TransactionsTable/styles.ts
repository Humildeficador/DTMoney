import styled from "styled-components";

export const TransactionsTableContainer = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem; 

        th {
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            background-color: var(--shape);
            padding: 1rem 2rem;
            border: 0;
            /* border-radius: 0.25rem; */

            &:first-child {
                border-top-left-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
                color: var(--text-title);
            }

            &:last-child {
                border-bottom-right-radius: 0.25rem;
                border-top-right-radius: 0.25rem;
            }

            &.withdraw {
                color: var(--red);
            }

            &.deposit {
                color: var(--green-light);
            }
        }
    }
`;