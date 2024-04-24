import { StyledButton, StyledButtonText } from "./elements";

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
