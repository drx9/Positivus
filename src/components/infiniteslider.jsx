import React from 'react';
import AmazonLogo from '../assets/logos/Amazon.svg';
import DribbbleLogo from '../assets/logos/dribble.svg';
import HubSpotLogo from '../assets/logos/HubSpot.svg';
import NotionLogo from '../assets/logos/Notion.svg';
import NetflixLogo from '../assets/logos/Netflix.svg';
import ZoomLogo from '../assets/logos/Zoom.svg';

function InfinitySlider() {
  const logos = [
    AmazonLogo,
    DribbbleLogo,
    HubSpotLogo,
    NotionLogo,
    NetflixLogo,
    ZoomLogo,
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll gap-20 grayscale mb-8">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfinitySlider;
