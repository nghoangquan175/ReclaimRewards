'use client';

import React from 'react';
import Image from 'next/image';
import notificationMascot from '@/assets/images/notification-mascot.png';
import closeIcon from '@/assets/icons/close-white.svg';
import gauge1 from '@/assets/icons/notification-gauge-1.svg';
import gauge2 from '@/assets/icons/notification-gauge-2.svg';
import instagramIcon from '@/assets/icons/instagram-white.svg';

interface NotificationPopupProps {
  onClose?: () => void;
  onFollowInstagram?: () => void;
}

/**
 * NotificationPopup - Successful registration message.
 * Implements Figma node 319:14787.
 */
const NotificationPopup: React.FC<NotificationPopupProps> = ({ onClose, onFollowInstagram }) => {
  return (
    <div 
      className="relative w-full max-w-[820px] bg-[#F5F6F6] rounded-t-[24px] overflow-hidden flex flex-col items-center pt-0 pb-12 px-6 md:px-10 lg:px-14 shadow-2xl"
      data-node-id="319:14787"
    >
      {/* Top Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 bg-[#0A2B6F] hover:bg-[#0A2B6F]/90 transition-colors w-10 h-10 rounded-full flex items-center justify-center p-2.5"
        data-node-id="337:19146"
        aria-label="Close"
      >
        <Image 
          src={closeIcon} 
          alt="Close" 
          width={20} 
          height={20}
          className="w-full h-full"
        />
      </button>

      {/* Illustration Area */}
      <div 
        className="relative w-full h-[300px] md:h-[388px] flex items-center justify-center mb-6" 
        data-node-id="319:14788"
      >
        {/* Blue Background Base */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[820px] h-[200px] md:h-[254px] bg-[#8DB8E2] rounded-[16px] z-0" 
          data-node-id="319:14790"
        />

        {/* Mascot Reggie */}
        <div 
          className="relative w-full max-w-[500px] h-full z-10 flex items-end justify-center"
          data-node-id="319:14791"
        >
          <div className="relative w-[120%] h-[120%] -bottom-[5%]">
            <Image
              src={notificationMascot}
              alt="Reggie Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Floating Gauges / Icons */}
        {/* Gauge 1 (Right) */}
        <div 
           className="absolute top-[20%] right-[5%] md:right-[10%] w-24 md:w-32 lg:w-44 h-auto z-20" 
           data-node-id="319:14792"
        >
          <Image 
            src={gauge1} 
            alt="Gauge" 
            width={179} 
            height={179} 
            className="w-full h-auto drop-shadow-lg"
          />
        </div>
        {/* Gauge 2 (Left) */}
        <div 
           className="absolute top-[10%] left-[2%] md:left-[5%] w-20 md:w-28 lg:w-32 h-auto z-20" 
           data-node-id="319:14881"
        >
          <Image 
            src={gauge2} 
            alt="Gauge Detail" 
            width={144} 
            height={144}
            className="w-full h-auto rotate-[-7deg] drop-shadow-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6 items-center text-center w-full" data-node-id="319:15336">
        <h2 
          className="text-[#001A77] text-[32px] md:text-[36px] font-bold leading-[1.0] tracking-[-0.03em] font-sans"
          data-node-id="319:15337"
        >
          You're in.
        </h2>
        
        <div 
          className="text-[#58595B] text-lg md:text-[20px] font-normal leading-[1.3] tracking-[-0.02em] max-w-[650px] px-4 font-sans"
          data-node-id="319:15341"
        >
          <p>Keep an eye on your inbox. Your confirmation is on the way.</p>
          <p className="mt-2 text-base md:text-xl">From 1 July 2026, drop off recovered refrigerant at Airefrig Australia or Actrol to start earning points.</p>
        </div>

        {/* CTA Button */}
        <div className="mt-4" data-node-id="319:15342">
          <button 
            onClick={onFollowInstagram}
            className="bg-[#EC008C] hover:bg-[#EC008C]/90 text-white rounded-[80px] p-1 flex items-center gap-3 transition-all group shadow-md"
            data-node-id="335:2403"
          >
            <span className="ps-5 pe-2 font-bold text-base md:text-[16px] tracking-[-0.02em] font-sans">
              Follow us on Instagram
            </span>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
              <Image 
                src={instagramIcon} 
                alt="Social Icon" 
                width={16} 
                height={16}
                style={{ filter: "brightness(0) saturate(100%) invert(14%) sepia(91%) saturate(5427%) hue-rotate(320deg) brightness(84%) contrast(106%)" }} // Approximating Magenta/600
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
