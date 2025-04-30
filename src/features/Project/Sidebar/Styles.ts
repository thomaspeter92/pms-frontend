import styled from "styled-components";
import { color, sizes } from "../../../shared/util/styles";
import { NavLink } from "react-router";

export const SidebarBackdrop = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
    backdrop-filter: blur(1px);
  }
`;

export const CollapseButton = styled.button`
  @media (min-width: 950px) {
    display: none;
  }
  position: absolute;
  width: 1rem;
  height: 100vh;
  background-color: ${color.grayLight};
  right: 0;
  top: 0;
  transform: translateX(98%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  justify-items: center;
  transition: all 0.2s ease;

  &:hover {
    width: 2rem;
  }
`;

export const StyledSidebar = styled.aside<{
  $isOpen: boolean;
}>`
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
    left: ${(props) =>
      props.$isOpen
        ? `${sizes.navWidth}px`
        : `-${sizes.sidebarWidth - sizes.navWidth}px`};
    z-index: 10;
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

export const Item = styled(NavLink)<{
  $disabled?: boolean;
}>`
  padding: 0.75rem 0.5rem;
  color: ${color.textMedium};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${color.grayLight};
    color: ${color.primary};
  }
`;
