import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: var(--white);

  font-size: 1rem;
  font-weight: 700;

  padding: 0.5rem;
  border-radius: 0.5rem;

  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: var(--tertiary-color);
    color: var(--grey-3);
  }
`;
