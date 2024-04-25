import React from 'react';
import Image from "next/image";
import {
  CardContainer,
  CardInfoContainer,
  CardInnerHeading,
  CardInnerText,
  ImageContainer,
} from "./elements";

interface CardProps {
  card: {
    image: {
      src: string;
      width: number;
      height: number;
    };
    title: string;
    description: string;
  };
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { image, title, description } = card;

  const parseDescription = (description: string): JSX.Element[] => {
    const parts = description.split(/(<b>.*?<\/b>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<b>") && part.endsWith("</b>")) {
        return <b key={index}>{part.slice(3, -4)}</b>;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image.src} alt={title} width={image.width} height={image.height} />
      </ImageContainer>
      <CardInfoContainer>
        <CardInnerHeading>{title}</CardInnerHeading>
        <CardInnerText>{parseDescription(description)}</CardInnerText>
      </CardInfoContainer>
    </CardContainer>
  );
};
