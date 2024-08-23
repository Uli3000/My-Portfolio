import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-230px] h-full w-full left-0 z-[1] object-cover opacity-75 invisible md:visible'
      >
        <source src='/space-video.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
