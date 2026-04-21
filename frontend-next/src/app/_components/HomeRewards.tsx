import React from 'react';
import Image from 'next/image';
import { RewardCard } from '../_block/RewardCard';
import featuredIcon from '@/assets/icons/featured_seasonal_and_gifts.svg';
import airlineIcon from '@/assets/icons/airline_seat_recline_extra.svg';
import flagIcon from '@/assets/icons/flag.svg';

/**
 * HomeRewards section implementing the "Rewards at a glance" block.
 * Based on Figma node 307:5702.
 */
export default function HomeRewards() {
  return (
    <section id="rewards" className="bg-grey50 py-15 overflow-hidden">
      <div className="container relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] flex flex-col gap-12">

        {/* Heading Section */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="HeadingLBold text-blue950">
            Rewards at a glance
          </h2>
          <p className="HeadingXSBold text-blue950">
            Every kilogram above last year&apos;s total counts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch ">

          {/* Card 1: Reward Points */}
          <RewardCard
            iconSrc={featuredIcon}
            title="Reward points earn on every extra kg"
          >
            <ul className="list-disc flex flex-col">
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
            iconSrc={airlineIcon}
            title="Travel incentives for top performers"
          >
            <ul className="list-disc flex flex-col">
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
            iconSrc={flagIcon}
            title="Grand prize: the ultimate reward"
          >
            <ul className="list-disc flex flex-col">
              <li className="ms-6">
                Return the highest volume over the baseline and your business will qualify to fly business class for the 2027/28 incentive trip.
              </li>
            </ul>
          </RewardCard>

          {/* Image Column */}
          <div className="relative flex items-end justify-center lg:justify-end overflow-visible">
            <div className="absolute top-[-70px] left-[-135px] w-[270px] md:w-[337px] lg:w-[555px] h-auto pointer-events-none select-none">
              <Image
                src="/images/reggie-pose-b.png"
                alt="Reggie Mascot"
                width={555}
                height={517}
                priority
                className="w-full h-full object-contain object-bottom scale-110 origin-bottom-right lg:scale-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
