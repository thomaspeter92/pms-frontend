import styled from "styled-components";
import { sizes } from "../../shared/util/styles";

export const Content = styled.main`
  padding-left: ${sizes.sidebarWidth}px;
  transition: all 0.3s ease;

  @media (max-width: 950px) {
    padding-left: ${sizes.navWidth + 20}px;
  }
`;
