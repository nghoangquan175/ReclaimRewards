import React from 'react';
import Image from 'next/image';
import { RewardCard } from '../_block/RewardCard';

/**
 * HomeRewards section implementing the "Rewards at a glance" block.
 * Based on Figma node 307:5702.
 */
export default function HomeRewards() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] flex flex-col gap-12">
        
        {/* Heading Section */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="HeadingLBold text-blue950">
            Rewards at a glance
          </h2>
          <p className="text-blue950 text-[24px] font-normal leading-tight tracking-[-3%]">
            Every kilogram above last year's total counts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Card 1: Reward Points */}
          <RewardCard 
            iconSrc="/images/reward-steps/card-1.svg" 
            title="Reward points earn on every extra kg"
          >
            <ul className="list-disc flex flex-col gap-4">
              <li className="ms-6">
                1 kg returned above baseline = 1 point.
              </li>
              <li className="ms-6">
                Minimum 50 points ($25 voucher). <br />
                Maximum 1,000 points ($500 voucher) per business.
              </li>
              <li className="ms-6">
                Points issued as gift vouchers at program end.
              </li>
              <li className="ms-6">
                Program cap: 150,000 points in total. Once exhausted, no further points awarded.
              </li>
            </ul>
          </RewardCard>

          {/* Card 2: Travel Incentives */}
          <RewardCard 
            iconSrc="/images/reward-steps/card-2.svg" 
            title="Travel incentives for top performers"
          >
            <ul className="list-disc flex flex-col gap-4">
              <li className="ms-6">
                Return 1,000 kg and the business qualify for a chance to go to Japan with A-Gas.
              </li>
              <li className="ms-6">
                5 businesses will be chosen to secure a spot for 2 people on the 2027/28 A-Gas incentive trip.
              </li>
            </ul>
          </RewardCard>

          {/* Card 3: Grand Prize */}
          <RewardCard 
            iconSrc="/images/reward-steps/card-3.svg" 
            title="Grand prize: the ultimate reward"
          >
            <ul className="list-disc flex flex-col gap-4">
              <li className="ms-6">
                Return the highest volume over the baseline and your business will qualify to fly business class for the 2027/28 incentive trip.
              </li>
            </ul>
          </RewardCard>

          {/* Image Column */}
          <div className="relative h-[400px] lg:h-full min-h-[300px] flex items-end justify-center lg:justify-end">
             {/* Simple decorative background for the mascot */}
            <div className="absolute inset-0 bg-blue50 rounded-[24px] -z-10" />
            <Image 
              src="/images/reward-steps/mascot-reggie.png" 
              alt="Reclaim Rewards Mascot" 
              width={555} 
              height={517}
              className="object-contain object-bottom h-[110%] w-auto absolute bottom-0 right-[-20%] lg:right-[-40%]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
