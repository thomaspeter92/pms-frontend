import styled from "styled-components";
import { sizes } from "../../shared/util/styles";

export const Content = styled.main`
  padding-left: ${sizes.sidebarWidth}px;
  transition: all 0.3s ease;
  height: 100%;

  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    padding-left: 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
  & > * {
    margin-bottom: 0.5rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AvatarList = styled.div`
  display: flex;
  flex: 1;

  & > *:not(:first-child) {
    margin-left: -10px;
    border: 1px solid white;
  }
`;
