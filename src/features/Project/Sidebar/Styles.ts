import styled from "styled-components";
import { color, font, sizes } from "../../../shared/util/styles";
import { NavLink } from "react-router";

export const StyledSidebar = styled.aside`
  position: fixed;
  left: ${sizes.navWidth}px;
  top: 0;
  height: 100vh;
  width: ${sizes.sidebarWidth}px;
  /* max-width: 25ch; */
  background-color: ${color.grayFaint};
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 950px) {
    left: -${sizes.sidebarWidth}px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${color.grayDark};
  gap: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Subheader = styled.p`
  color: ${color.grayDark};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const Item = styled(NavLink)`
  padding: 0.75rem 0.5rem;
  color: ${color.textMedium};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;

  &:hover {
    background-color: ${color.grayLight};
    color: ${color.primary};
  }
`;
