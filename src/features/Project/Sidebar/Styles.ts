import styled from "styled-components";
import { color, font, sizes } from "../../../shared/util/styles";
import { NavLink } from "react-router";

export const StyledSidebar = styled.aside`
  position: fixed;
  left: ${sizes.navWidth}px;
  top: 0;
  height: 100vh;
  width: ${sizes.sidebarWidth}px;
  background-color: ${color.backgroundLight};
`;

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const HeaderImg = styled.div`
  background-color: ${color.backgroundMedium};
  border-radius: 0.5rem;
  color: ${color.textMedium};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  font-weight: bold;
  /* font-size: ; */
`;

export const Item = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: ${color.textMedium};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: ${color.backgroundMedium};
  }
`;
