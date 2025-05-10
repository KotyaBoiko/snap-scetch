import img from "@/app/assets/images/home.jpg";

const ForWhom = () => {
  return (
    <div className="py-5 lg:px-7">
      <div className="bg-main-red h-full w-full text-main-beige overflow-hidden">
        <div className="flex flex-col gap-2 md:items-center md:justify-center mb-10 p-10 pb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            For artists of all levels
          </h2>
          <p className="max-w-80 md:max-w-[80%] lg:max-w-xl md:text-center">
            Whether you’re just starting or refining years of experience —
            SnapScetch helps you stay consistent, build confidence, and improve
            your visual thinking through simple daily practice.
          </p>
        </div>
        <img
          src={img}
          alt="art"
          className="relative w-[90%] rounded-t-4xl h-full mx-auto sm:mb-[-20%] md:mb-[-25%]"
        />
      </div>
    </div>
  );
};

export default ForWhom;
