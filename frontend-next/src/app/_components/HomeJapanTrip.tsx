'use client';

import { SplitContentSection } from '@/components/sections/SplitContentSection';
import templeImg from '@/assets/images/temple.png';
import { scrollToSection } from '@/lib/utils';

/**
 * HomeJapanTrip section detailing the Japan trip reward features.
 * Based on Figma node 675:3872.
 */
export default function HomeJapanTrip() {
  const features = [
    'Return flights for two to Tokyo, Japan',
    '6 nights’ accommodation',
    'Daily breakfast',
    'Hosted lunches/dinners (selected days/nights)',
    'Hosted technical visits',
    'Transfers',
  ];

  return (
    <SplitContentSection
      id="japan-trip"
      title={<div>Win a Trip to Japan, Return <br /> Flights for Two Included</div>}
      features={features}
      imageSrc={templeImg}
      imageAlt="Japan Temple"
      buttonText="Register Your Business"
      onButtonClick={() => scrollToSection('registration')}
      sectionClassName='pt-[20px] pb-[60px] lg:pt-[60px] lg:pb-[20px]'
      reverse={false}
    />
  );
}
