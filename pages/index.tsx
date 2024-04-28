import { useState } from 'react';
import { Hero } from "../sections";
import { Main } from "../sections/Main/Main";
import React from 'react';

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
}

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

const heroProps: HeroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: { src: "/img/video.png", alt: "video", width: 394, height: 550 },
  cardsData: [
    {
      id: 1,
      image: { src: "/img/brief.png", width: 100, height: 90 },
      title: "Brief",
      description:
        "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.",
    },
    {
      id: 2,
      image: { src: "/img/search.png", width: 100, height: 90 },
      title: "Search",
      description:
        "In depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
    },
    {
      id: 3,
      image: { src: "/img/pitch.png", width: 100, height: 90 },
      title: "Pitch",
      description:
        "Comprehensive <b>pitch management</b> including comms, diary managment and pitch hosting."
    },
  ] as CardData[],
};

const Home = () => {
  const [showMain, setShowMain] = useState(false);

  const handleStartClick = () => {
    setShowMain(true);
  };

  return (
    <>
      <div>
        {!showMain && <Hero {...heroProps} onStartClick={handleStartClick} />}
        {showMain && <Main {...mainProps} />}
      </div>
    </>
  );
}

export default Home;
