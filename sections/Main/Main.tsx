import React from "react";
import Image from "next/image";
import {
  MainContainer,
  Heading,
  SubHeading,
  InfoContainer,
  CardsContainer,
  ImageWrapper,
} from "./elements";
import { Card } from "../../collections/Card/Card";


interface CardData {
  id: number;
  image: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

interface MainProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cardsData: CardData[];
}

export const Main: React.FC<MainProps> = ({ image, cardsData }) => {
  return (
    <MainContainer>
      <Heading>Managed agency selection</Heading>
      <SubHeading>Strengthen your onboarding process</SubHeading>

      <InfoContainer>
        <ImageWrapper>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </ImageWrapper>
        <CardsContainer>
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </CardsContainer>
      </InfoContainer>
    </MainContainer>
  );
};
