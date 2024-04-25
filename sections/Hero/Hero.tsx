import Image from "next/image";
import React from "react";
import {
  StyledGetStartedBtn,
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
} from "./elements";

interface HeroProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  ctaText: string;
  onStartClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ image, title, description, ctaText, onStartClick }) => {
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
