import { Hero } from "../sections";
import { Main } from "../sections/Main/Main";


const heroProps = {
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
      image: { src: "/img/brief.png", alt: "", width: 100, height: 80 },
      title: "Brief",
      description:
        "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.",
    },
    {
      id: 2,
      image: { src: "/img/search.png", alt: "", width: 100, height: 90 },
      title: "Search",
      description:
        "In depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
    },
    {
      id: 3,
      image: { src: "/img/pitch.png", alt: "", width: 100, height: 80 },
      title: "Pitch",
      description:
        "Comprehensive <b>pitch management</b> including comms, diary managment and pitch hosting."
    },
  ],
};

const Home = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Main {...mainProps} />
    </>
  );
}

export default Home;