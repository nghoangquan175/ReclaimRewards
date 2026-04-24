'use client';

import React from 'react';
import Image from 'next/image';
import notificationMascot from '@/assets/images/RR_Reggie_Pose_b32.png';
import closeIcon from '@/assets/icons/close-white.svg';
import gauge1 from '@/assets/icons/notification-gauge-1.svg';
import gauge2 from '@/assets/icons/notification-gauge-2.svg';
import stamp1 from '@/assets/icons/stamp_1.svg';
import stamp2 from '@/assets/icons/stamp_2.svg';
import facebookIcon from '@/assets/icons/facebook.svg';
import linkedinIcon from '@/assets/icons/Linkedin.svg';

interface NotificationPopupProps {
  onClose?: () => void;
  onFollowFacebook?: () => void;
  onFollowLinkedin?: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ onClose, onFollowFacebook, onFollowLinkedin }) => {
  return (
    <div className="relative w-[900px] bg-[#F5F6F6] rounded-t-[24px] overflow-hidden flex flex-col items-center pt-0 pb-10 px-6 md:px-10 shadow-2xl">
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 bg-[#0A2B6F] hover:bg-[#0A2B6F]/90 transition-colors w-10 h-10 rounded-full flex items-center justify-center p-2.5"
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
      <div className="relative w-full h-[300px] md:h-[388px] flex items-end justify-center mb-6">
        {/* Blue Background Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[820px] h-[200px] md:h-[254px] bg-[#8DB8E2] rounded-[16px] z-0" />

        {/* Mascot Reggie */}
        <div className="absolute bottom-[20px] md:bottom-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[550px] h-[280px] md:h-[404px] z-30 pointer-events-none">
          <Image
            src={notificationMascot}
            alt="Reggie Mascot"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Floating Gauges / Icons */}

        {/* Stamp 1 (Right) */}
        <div className="absolute top-[60px] left-[9px]">
          <Image src={stamp1} alt="Stamp 1" width={353} height={179} className="w-full h-auto" />
        </div>
        {/* Stamp 2 (Left) */}
        <div className="absolute top-[124px] left-[22px]">
          <Image src={stamp2} alt="Stamp 2" width={173} height={140} className="w-full h-auto" />
        </div>
        {/* Gauge 1 (Right) */}
        <div className="absolute top-[94px] left-[523px]">
          <Image src={gauge1} alt="Gauge 1" width={162} height={163} className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Gauge 2 (Left) */}
        <div className="absolute top-[90px] left-[518px]">
          <Image src={gauge2} alt="Gauge 2" width={353} height={175} className="w-full h-auto drop-shadow-md" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6 items-center text-center w-full relative z-40">
        <h2 className="HeadingMBold text-[#001A77]">
          You’re Registered!
        </h2>

        <p className="ContentMRegular text-[#252527] max-w-[680px] px-4">
          Keep an eye on your inbox for next steps. Once we’ve verified your details, drop off recovered refrigerant at Actrol or Airefrig Australia to start earning rewards.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 md:gap-[40px] mt-2 flex-col sm:flex-row items-center justify-center">
          {/* Facebook Button */}
          <button
            onClick={onFollowFacebook}
            className="bg-[#EC008C] hover:bg-[#EC008C]/90 text-white rounded-[80px] h-[40px] p-1 pl-4 flex items-center gap-3"
          >
            <span className="ContentMBold whitespace-nowrap">
              Follow us on Facebook
            </span>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src={facebookIcon}
                alt="Facebook"
                width={20}
                height={20}
              />
            </div>
          </button>

          {/* Linkedin Button */}
          <button
            onClick={onFollowLinkedin}
            className="bg-[#EC008C] hover:bg-[#EC008C]/90 text-white rounded-[80px] h-[40px] p-1 pl-4 flex items-center gap-3"
          >
            <span className="ContentMBold whitespace-nowrap">
              Follow us on Linkedin
            </span>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
