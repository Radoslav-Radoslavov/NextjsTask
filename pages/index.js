import { Hero } from "../sections";
import { Main } from "../sections/Main/Main";
import Head from 'next/head'

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
      layout: "responsive",
      description:
        "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.",
    },
    {
      id: 2,
      image: { src: "/img/search.png", alt: "", width: 100, height: 90 },
      title: "Search",
      layout: "responsive",
      description:
        "In depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
    },
    {
      id: 3,
      image: { src: "/img/pitch.png", alt: "", width: 100, height: 80 },
      title: "Pitch",
      layout: "responsive",
      description:
        "Comprehensive <b>pitch management</b> including comms, diary managment and pitch hosting."
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps} />
      </div>
    </>
  );
}
