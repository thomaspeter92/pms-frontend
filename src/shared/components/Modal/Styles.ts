import styled from "styled-components";

export const ModalPanel = styled.dialog`
  background: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  max-width: 95%;
  /* width: 500px; */

  &:focus-visible {
    outline: none;
  }

  &::backdrop {
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  z-index: 100;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
