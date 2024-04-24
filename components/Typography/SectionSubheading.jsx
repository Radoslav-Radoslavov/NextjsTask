/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { StyledSectionSubheading } from "./elements";

export const SectionSubheading = forwardRef(({ ...props }, ref) => {
  return <StyledSectionSubheading {...props} ref={ref} />;
});
