import GitHubIcon from "@/app/assets/icons/github.svg?react";
import LinkedInIcon from "@/app/assets/icons/linkedin.svg?react";
import TelegramIcon from "@/app/assets/icons/telegram.svg?react";
import EmailIcon from "@/app/assets/icons/email.svg?react";
import TokTokIcon from "@/app/assets/icons/tiktok.svg?react";

const socials = [
  {
    url: "https://github.com/KotyaBoiko",
    Icon: GitHubIcon,
    title: "Github",
  },
  {
    url: "https://www.linkedin.com/in/kostia-boiko-34a5a435a/",
    Icon: LinkedInIcon,
    title: "Linkedin",
  },
  {
    url: "https://t.me/KotyaBoko",
    Icon: TelegramIcon,
    title: "Telegram",
  },
  {
    url: "mailto:smile.ua2005@gmail.com",
    Icon: EmailIcon,
    title: "Email",
  },
  {
    url: "https://www.tiktok.com/@qv4rk",
    Icon: TokTokIcon,
    title: "TikTok",
  },
];

const Socials = () => {
  return (
<div className="flex lg:flex-col flex-wrap lg:flex-nowrap gap-5 lg:gap-10 text-xl lg:text-2xl font-semibold">
  {socials.map(({ url, Icon, title }, index) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-center transition-opacity hover:opacity-60"
      key={index}
    >
      <Icon className="icon-lg" />
      <span>{title}</span>
    </a>
  ))}
</div>

  );
};

export default Socials;
