'use client';

import React from 'react';
import Image from 'next/image';
import lockIcon from '@/assets/icons/lock.svg';
import lockVerticalIcon from '@/assets/icons/lock_vertical.svg';
import planeCircle from '@/assets/icons/plane_circle.svg';
import pointCircle from '@/assets/icons/point_circle.svg';
import planeSeatCircle from '@/assets/icons/plane_seat_circle.svg';
import templeCircle from '@/assets/icons/temple_circle.svg';

/**
 * HomeRewards section implementing the "Rewards at a glance" block.
 * Rebuilt to match the latest Figma design (node 675:3755).
 */
export default function HomeRewards() {
  return (
    <section id="rewards" className="bg-grey100 py-[60px] overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] flex flex-col gap-10 items-center">

        {/* Heading Container */}
        <div className="w-full flex flex-col gap-6 md:items-center lg:items-start">
          <h2 className="HeadingLBold text-blue950">
            Rewards at a Glance
          </h2>
        </div>

        {/* Main Content Area */}
        {/* Main Content Area */}
        <div className="w-full flex flex-col lg:flex-row gap-[5px] items-center lg:items-stretch">

          {/* Section 1: Reward Points */}
          <div className="flex flex-col w-full lg:w-[414px] shrink-0 isolate">
            <div className="px-5 mb-[-10px] z-[2]">
              <div className="bg-[#ec008c] h-[40px] flex items-center justify-center rounded-[8px] px-[10px]">
                <span className="text-white font-bold text-[20px] tracking-[-0.4px]">Reward Points</span>
              </div>
            </div>
            <div className="bg-white lg:bg-[#f5f6f6] flex flex-col md:flex-row lg:flex-col gap-6 items-center justify-center p-6 md:px-10 md:py-10 lg:px-8 lg:py-16 rounded-[24px] z-[1] border lg:border-none border-grey100">
              <div className="flex flex-col gap-6 items-center justify-center w-full md:w-1/2 lg:w-full">
                <div className="ContentXLBold text-[#001a77] text-center">
                  <p>Earn Points on</p>
                  <p>Every Extra Kg Returned*</p>
                </div>

                <div className="flex gap-6 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-[120px] text-center">
                    <span className="text-[#001a77] font-bold text-[48px] tracking-[-1.44px] leading-none">1 kg</span>
                    <span className="text-[#001a77] text-[16px] tracking-[-0.32px]">RETURNED</span>
                  </div>
                  <div className="text-[#001a77] font-bold text-[36px]">=</div >
                  <div className="shrink-0">
                    <Image src={pointCircle} alt="1 Point" width={120} height={120} className="size-[120px]" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-full text-[#252527] text-[16px] tracking-[-0.32px]">
                <ul className="list-disc flex flex-col gap-2">
                  <li className="ms-6">Earn 1 point for every kg returned above your volume from last FY</li>
                  <li className="ms-6">Min. 50 points ($25) Max. 1,000 points ($500) redeemable via e-gift voucher</li>
                  <li className="ms-6">Capped at 150,000 points across all participating businesses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lock Separator */}
          <div className="flex items-center justify-center shrink-0 lg:w-[57px]">
            {/* Horizontal Lock (Desktop) */}
            <div className="hidden lg:block">
              <Image
                src={lockIcon}
                alt="Lock"
                width={57}
                height={128}
                className="h-[128px] w-auto"
              />
            </div>
            {/* Vertical Lock (Mobile/Tablet) */}
            <div className="block lg:hidden">
              <Image
                src={lockVerticalIcon}
                alt="Lock"
                width={128}
                height={57}
                className="w-[128px] h-auto"
              />
            </div>
          </div>

          {/* Section 2: Travel Incentives */}
          <div className="flex flex-col w-full gap-8 md:gap-3">
            <div className="flex flex-col isolate">
              <div className="px-5 mb-[-10px] z-[2]">
                <div className="bg-[#ec008c] h-auto min-h-[40px] py-2 flex items-center justify-center rounded-[8px] px-[10px]">
                  <span className="ContentXLBold text-center">
                    Return Higher Volumes to Unlock Travel Incentives
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 z-[1]">
                {/* Card: Return 3 Tonnes */}
                <div className="bg-white lg:bg-[#f5f6f6] flex flex-col gap-6 p-8 md:p-10 items-center justify-center rounded-[24px] border lg:border-none border-grey100 flex-1">
                  <div className="ContentXLBold text-[#001a77] text-center">
                    <p>Return 3 Tonnes</p>
                    <p>Qualify for a Trip to Japan</p>
                  </div>
                  <div className="flex gap-5 items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-[120px] text-[#001a77] text-center">
                      <span className="font-bold text-[48px] tracking-[-1.44px] leading-none">3T</span>
                      <span className="text-[16px] tracking-[-0.32px]">RETURNED</span>
                    </div>
                    <div className="text-[#001a77] font-bold text-[36px]">=</div >
                    <div className="shrink-0">
                      <Image src={planeCircle} alt="Qualify Economy Class" width={120} height={120} className="size-[120px]" />
                    </div>
                  </div>
                </div>

                {/* Card: Return 10 Tonnes */}
                <div className="bg-white lg:bg-[#f5f6f6] flex flex-col gap-6 p-8 md:p-10 items-center justify-center rounded-[24px] border lg:border-none border-grey100 flex-1">
                  <div className="ContentXLBold text-[#001a77] text-center">
                    <p>Return 10 Tonnes</p>
                    <p>Qualify for Business Class</p>
                  </div>
                  <div className="flex gap-5 items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-[120px] text-[#001a77] text-center">
                      <span className="font-bold text-[48px] tracking-[-1.44px] leading-none">10T</span>
                      <span className="text-[16px] tracking-[-0.32px]">RETURNED</span>
                    </div>
                    <div className="text-[#001a77] font-bold text-[36px]">=</div >
                    <div className="shrink-0">
                      <Image src={planeSeatCircle} alt="Qualify Business Class" width={120} height={120} className="size-[120px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Top 5 win */}
            <div className="bg-white lg:bg-[#f5f6f6] flex flex-col md:justify-center
             md:flex-row gap-6 h-auto items-center p-8 md:p-10 lg:py-10 rounded-[24px] border lg:border-none border-grey100">
              <div className="shrink-0">
                <Image src={templeCircle} alt="Trip Available" width={120} height={120} className="size-[120px]" />
              </div>
              <div className="flex flex-col gap-1 md:gap-3 items-center md:items-start text-[#001a77] text-center md:text-left">
                <h3 className="ContentXLBold lg:HeadingSBold">
                  Top 5 will win a Trip to Japan
                </h3>
                <p className="text-[16px] tracking-[-0.32px] font-normal leading-tight">
                  (by total volume and eligibility)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
