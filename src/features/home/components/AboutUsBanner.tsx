const AboutUsBanner = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-40 bg-main-black text-white px-10 relative z-30">
      <div className="flex flex-col gap-16">
        <p>About us</p>
        <div className="text-8xl flex flex-row gap-10 relative">
            <span>❝</span>
          <h2 className="text-8xl w-5xl">
            Made for artists chasing growth through routine
          </h2>
          <span>❞</span>
        </div>
        <div className="flex flex-row gap-10">
          <p className="w-sm">
            SnapScetch was born from the need for simple, consistent practice.
            No clutter — just focused sketching that fits into your daily
            routine.
          </p>
          <p className="w-sm">
            It’s a tool to sharpen your skills through repetition and intention.
            Draw more often, grow more naturally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
