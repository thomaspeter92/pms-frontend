import styled from "styled-components";

export const ModalPanel = styled.dialog`
  background: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  max-width: 600px;

  &:focus-visible {
    outline: none;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
