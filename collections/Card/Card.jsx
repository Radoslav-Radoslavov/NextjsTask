import Image from "next/image";
import {
  CardContainer,
  CardInfoContainer,
  CardInnerHeading,
  CardInnerText,
  ImageContainer,
} from "./elements";

export const Card = ({ card }) => {
  const { image, title, description } = card;

  const parseDescription = (description) => {
    const parts = description.split(/(<b>.*?<\/b>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<b>") && part.endsWith("</b>")) {
        return <b key={index}>{part.slice(3, -4)}</b>;
      } else {
        return part;
      }
    });
  };

  return (
    <CardContainer>
      <ImageContainer>
      <Image layout="responsive" src={image.src} alt={title} width={image.width} height={image.height} />
      </ImageContainer>
      <CardInfoContainer>
        <CardInnerHeading>{title}</CardInnerHeading>
        <CardInnerText>
          {parseDescription(description)}
        </CardInnerText>
      </CardInfoContainer>
    </CardContainer>
  );
};