import Image from "next/image";
import {
  StyledGetStartedBtn,
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, onStartClick }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledGetStartedBtn onClick={onStartClick}>
          {ctaText}
        </StyledGetStartedBtn>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
        />
      </StyledImageContainer>
    </StyledContainer>
  );
};
