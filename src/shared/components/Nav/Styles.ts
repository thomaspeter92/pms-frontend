import styled from "styled-components";
import { color, sizes, zIndexes } from "../../util/styles";
import { NavLink } from "react-router";

export const NavBar = styled.nav`
  z-index: ${zIndexes.nav};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${sizes.navWidth}px;
  background-color: ${color.primary};
  transition: width 0.2s ease;

  &:hover {
    width: ${sizes.navHoverWidth}px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Inner = styled.div`
  position: relative;
  height: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const HomeLink = styled(NavLink)`
  position: relative;
  left: ${sizes.navWidth / 2}px;
  transform: translateX(-50%);
  width: fit-content;
  margin-bottom: 1rem;

  & > img {
    width: 35px;
    height: auto;
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.8rem;
  padding-left: ${sizes.navWidth / 2 - sizes.navWidth / 4}px;
  transition: background 0.2s;
  color: ${color.backgroundLightest};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  & > * {
    flex-shrink: 0; /* Prevent icon shrinking */
  }
  svg {
    font-size: 1.5rem; /* Control icon size */
    margin: 0.2rem;
  }

  &:last-of-type {
    margin-top: auto;
  }
`;

export const ItemText = styled.p`
  visibility: hidden;
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap; /* Prevent text wrapping */
  transition: max-width 0.2s ease, opacity 0.2s ease;
  position: relative;

  ${NavBar}:hover & {
    margin-left: 1rem;
    visibility: visible;
    opacity: 1;
    max-width: 150px; /* Set a max-width for smooth transition */
  }
`;
