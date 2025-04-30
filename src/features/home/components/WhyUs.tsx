import TitleInfoCard from "@/components/Cards/TitleInfoCard";

import PaleteIcon from "@/app/assets/icons/palete.svg?react";
import PaperPlaneIcon from "@/app/assets/icons/paperplane.svg?react";
import TimeForwardIcon from "@/app/assets/icons/reset.svg?react";

const cardsInfo = [
  {
    title: "Focused Practice",
    info: "Work with a timer and hand-picked references to train attention, speed, and precision. No distractions — just drawing",
    Icon: PaleteIcon,
  },
  {
    title: "Simple and Minimal",
    info: "No logins, no complex settings. Open the site, pick a category, and start sketching in seconds.",
    Icon: PaperPlaneIcon,
  },
  {
    title: "Consistency Made Easy",
    info: "Quick sessions fit into any schedule. Make sketching a habit without pressure or burnout.",
    Icon: TimeForwardIcon,
  },
];

const WhyUs = () => {
  return (
    <div className="flex items-center p-20 h-[100vh] bg-main-beige">
      <div className="flex justify-between gap-8 w-full h-max">
        {cardsInfo.map(({ title, info, Icon }) => (
          <div className="border-b-2 pb-2 w-full" key={title}>
            <TitleInfoCard title={title} info={info} Icon={Icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
