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
      title="Win a Trip to Japan, Return Flights for Two Included"
      features={features}
      imageSrc={templeImg}
      imageAlt="Japan Temple"
      buttonText="Register Your Business"
      onButtonClick={() => scrollToSection('registration')}
      sectionClassName='pt-[60px] pb-[20px]'
      reverse={false}
    />
  );
}
