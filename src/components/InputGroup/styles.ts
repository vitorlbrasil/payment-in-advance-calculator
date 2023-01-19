import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 100%;

  > input {
    width: 100%;
    padding: 0.25rem;
    font-size: 0.875rem;
    color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 0.25rem;
  }
`;
