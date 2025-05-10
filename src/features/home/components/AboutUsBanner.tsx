const AboutUsBanner = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-40 bg-main-black text-white px-10 relative z-30">
      <div className="flex flex-col gap-10 lg:gap-16">
        <p>About us</p>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-row  gap-5 lg:gap-10 relative">
            <span className="hidden sm:block">❝</span>
          <h2 className="xl:w-5xl">
            Made for artists chasing growth through routine
          </h2>
          <span className="hidden xl:block">❞</span>
        </div>
        <div className="sm:flex flex-row gap-10">
          <span className="sm:block lg:w-sm">
            SnapScetch was born from the need for simple, consistent practice.
            No clutter — just focused sketching that fits into your daily
            routine.
          </span>
          <span className="sm:block lg:w-sm">
            It’s a tool to sharpen your skills through repetition and intention.
            Draw more often, grow more naturally.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
