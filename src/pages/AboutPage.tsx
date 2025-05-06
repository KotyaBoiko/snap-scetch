import IsolatedBlock from "@/components/IsolateBlock";
import PointerTitle from "@/components/ui/PointerTitle";

const futureFeature = [
  "New practice modes (gesture sketching, figure, anatomy, etc.)",
  "Beginner-friendly learning guides",
  "Curated packs with increasing difficulty levels",
  "Personal profiles for tracking progress and creating custom categories",
];

const AboutPage = () => {
  return (
    <div className="wrapper max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:py-12 text-base sm:text-lg lg:text-xl text-zinc-800">
      <PointerTitle
        title="About SnapScetch"
        className="mb-6"
      />
      <IsolatedBlock className="sm:p-10 mb-12 space-y-4 leading-relaxed">
        <p>
          I created SnapScetch because I kept noticing the same issue among many
          artists: it’s hard to stay consistent with practice. Not because of a
          lack of motivation — but because there’s always something in the way.
        </p>
        <p>
          Choosing the right references, finding time, deciding where to start...
          This site is an attempt to make practice more accessible and structured.
        </p>
        <p>
          It doesn’t teach you how to draw, doesn’t save your results, and doesn’t
          judge you (at least not yet 😉). But it gives you what’s often missing —
          a clear push to action: here’s an image, here’s a timer — draw.
        </p>
        <p>
          SnapScetch is made for those who want to train, not procrastinate.
        </p>
      </IsolatedBlock>

      <PointerTitle title="What’s next?" className="mb-6" />

      <IsolatedBlock className="sm:p-10 space-y-6">
        <h2 className="text-2xl font-semibold">In the future, I’d love to add:</h2>
        <ul className="list-disc marker:text-main-red ml-6 space-y-3 text-zinc-700">
          {futureFeature.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="pt-4">
          Whether these features happen depends on one thing — if this tool
          turns out to be truly useful to others. I don’t see SnapScetch as a
          “product.” I see it as a habit — one that’s easy to stick with 🎯
        </p>
      </IsolatedBlock>
    </div>
  );
};

export default AboutPage;
