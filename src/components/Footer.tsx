import React, { useEffect, useState } from "react";
import type { StreamingData } from "../types/api";
import FooterActivity from "./FooterActivity"; // Ensure FooterActivity is also converted to React

interface Social {
  name: string;
  href: string;
}

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/uchks",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/uchks.jp",
  },
];

const Footer: React.FC = () => {
  const [streamingData, setStreamingData] = useState<StreamingData>({
    streaming: null,
  });

  const [activityData, setActivityData] = useState<ActivityData>({
    presence: null,
  });

  useEffect(() => {
    const fetchStreamingData = async () => {
      const response = await fetch("https://astrological-api.fly.dev/music/streaming");
      const data = (await response.json()) as StreamingData;
      console.log(data);
      setStreamingData(data);
    };

    const fetchActivityData = async () => {
      const response = await fetch("https://astrological-api.fly.dev/fun/discord");
      const data = (await response.json()) as ActivityData;
      console.log(data);
      setActivityData(data);
    };

    fetchStreamingData();
    fetchActivityData();
  }, []);

  return (
    <footer className="absolute bottom-0 w-full md:flex grid justify-center md:justify-between p-4 xl:pr-[7rem] xl:pl-[7rem]">
      <div className="flex justify-center md:justify-start">
        <FooterActivity streaming={streamingData} presence={activityData} />
      </div>
      <div class="flex gap-3 justify-center md:justify-end">
        <a href="https://github.com/jacc/landscape" class="flex gap-3 text-gray-10 hover:text-gray-12 transition-colors duration-200">Made with ❤️ by Jack LaFond</a>
        <p class="flex gap-3 text-gray-10 transition-colors duration-200">|</p>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="flex gap-2 text-gray-10 hover:text-gray-12 transition-colors duration-200"
          >
            {social.name}
          </a>
        ))}

      </div>
    </footer>
  );
};

export default Footer;