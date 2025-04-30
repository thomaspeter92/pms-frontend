import React, { forwardRef } from "react";
import { LinkProps } from "react-router";
import { StyledButton, StyledLink } from "./Styles";

type ReactRouterLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

type Props =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      to?: undefined;
      href?: undefined;
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string })
  | ReactRouterLinkProps;

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props & {
    variant: "gray" | "primary";
  }
>(({ children, to, variant, ...props }, ref) => {
  if (to) {
    return (
      <StyledLink
        $variant={variant}
        to={to}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as any)}
      >
        {children}
      </StyledLink>
    );
  } else {
    return (
      <StyledButton
        $variant={variant}
        {...(props as any)}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </StyledButton>
    );
  }
});

export default Button;
