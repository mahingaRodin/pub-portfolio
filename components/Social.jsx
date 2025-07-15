import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mahingaRodin" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/m-rodin-1b21a9375/",
  },
  { icon: <FaDiscord />, path: "https://discord.com/channels/mahinga_70311" },
  { icon: <FaXTwitter />, path: "https://x.com/rodin9878" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
