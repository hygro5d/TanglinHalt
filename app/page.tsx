import VideoSection from './components/Home/VideoSection';
import Hero from './components/Home/Hero';
import SectionCard from './components/Home/SectionCard';
import ContactUs from './components/shared/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Hero />
      {/* videos portion 1 ------------>  */}
      <div className='w-full grid gap-4 sm:gap-8 grid-cols-1'>
        {videoPortion1.map((item, index) => {
          return (
            <VideoSection
              key={index}
              index={index}
              title={item.title}
              des={item.des}
              video={item.video}
            />
          );
        })}
      </div>
      {/* videos portion 2 ------------>  */}
      <div className='w-full grid gap-4 sm:gap-8 grid-cols-1 py-8 md:py-16 '>
        {videoPortion2.map((item, index) => {
          return (
            <VideoSection
              key={index}
              index={index}
              title={item.title}
              des={item.des}
              video={item.video}
            />
          );
        })}
      </div>
      {/* body 1 ==========> */}
      <SectionCard
        img={sectionsData[0].image}
        title={sectionsData[0].title}
        des={sectionsData[0].subTitle}
        secIndex={0}
      />
    </>
  );
}

const sectionsData = [
  {
    image: '/assets/sec2.jpg',
    title: 'The Honour Film Initiative',
    subTitle: [
      'The Honour Film Initiative enables emerging filmmakers to tell stories that otherwise may never get told. Stories of honour in its various dimensions: Integrity, respect, resilience, thrift and hard work.',
    ],
  },
];

const videoPortion1 = [
  {
    video: 'https://www.youtube.com/embed/xXB65UT9PBI',
    title: 'Finders Keepers',
    des: 'Explore the heartwarming tale of home and familial ties in this "kampung," where neighbours are more than just acquaintances - they are family.',
  },
  {
    video: 'https://www.youtube.com/embed/DXUsXEyrc2w',
    title: 'The Lontong Queen',
    des: "Indulge in a story of family, food, grit, and perseverance, featuring one of Singapore's iconic dishes. Witness the journey of a culinary legend in the heart of Tanglin Halt.",
  },
];

const videoPortion2 = [
  {
    video: 'https://www.youtube.com/embed/tk7mZnsStpg',
    title: 'A Peace Of You',
    des: 'Experience a narrative of childhood, growth, friendship, and community as we unveil the bonds that shaped lives within the vibrant tapestry of Tanglin Halt. ',
  },
  {
    video: 'https://www.youtube.com/embed/VWpYbdsrL38',
    title: 'Entangled',
    des: 'A story of resilience, racial harmony and service, featuring a nostalgic neighbourhood haunt.',
  },
];
