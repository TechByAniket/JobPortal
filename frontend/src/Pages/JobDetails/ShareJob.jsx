import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ShareJob = ({ job }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href); // safe after mount
  }, []);

  const iconsMap = {
    Whatsapp: <FaWhatsapp />,
    LinkedIn: <FaLinkedin />,
    Twitter: <FaXTwitter />,
  };

  const socialMedia = [
    { key: "Whatsapp", link: "https://wa.me/?text=", color:"#25D366" },
    {
      key: "LinkedIn",
      link: "https://www.linkedin.com/shareArticle?mini=true&url=",
      color:"#0077B5"
    },
    { key: "Twitter", link: "https://twitter.com/intent/tweet?url=", color:"black" }, 
  ];

  return (
    <>
      <h3 className="pb-5 font-medium text-theme">Share This Job</h3>
      <div className="flex space-x-4 justify-start md:justify-center">
      {socialMedia.map(({ key, link, color }) => (
        <a
          key={key}
          href={`${link}${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color }}
          className={`px-4 py-2 text-2xl md:text-2xl`}
        >
          {iconsMap[key]}
        </a>
      ))}
      </div>
    </>
  );
};
