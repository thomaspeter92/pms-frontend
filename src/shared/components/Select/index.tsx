import React, { forwardRef } from "react";
import { Container, StyledSelect } from "./Styles";

type BaseProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

// Declare generic component
function SelectComponent<T extends string | number | object = string>(
  props: BaseProps & {
    options: T[];
    getOptionLabel?: (option: T) => string;
    getOptionValue?: (option: T) => string;
  },
  ref: React.Ref<HTMLSelectElement>
) {
  const {
    options,
    getOptionLabel = (o) => String(o),
    getOptionValue = (o) => String(o),
    ...rest
  } = props;

  return (
    <Container>
      <StyledSelect ref={ref} {...rest}>
        {options.map((option, i) => (
          <option key={i} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
}

// Wrap with forwardRef and preserve generics
const Select = forwardRef(SelectComponent) as <T>(
  props: React.PropsWithChildren<
    BaseProps & {
      options: T[];
      getOptionLabel?: (option: T) => string;
      getOptionValue?: (option: T) => string;
    }
  > & { ref?: React.Ref<HTMLSelectElement> }
) => ReturnType<typeof SelectComponent>;

export default Select;
