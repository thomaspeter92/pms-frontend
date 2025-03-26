import styled from "styled-components";
import { sizes } from "../../shared/util/styles";

const paddingLeft = sizes.navWidth + sizes.sidebarWidth;

export const Content = styled.main`
  padding: 20px 20px 20px ${paddingLeft}px;
`;
