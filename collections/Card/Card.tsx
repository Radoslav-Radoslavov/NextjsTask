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



  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image.src} alt={title} width={image.width} height={image.height} />
      </ImageContainer>
      <CardInfoContainer>
        <CardInnerHeading>{title}</CardInnerHeading>
        <CardInnerText dangerouslySetInnerHTML={{ __html: description }} />
      </CardInfoContainer>
    </CardContainer>
  );
};
