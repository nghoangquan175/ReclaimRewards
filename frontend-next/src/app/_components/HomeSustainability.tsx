'use client';

import { SplitContentSection } from '@/components/sections/SplitContentSection';
import mascotImg from '@/assets/images/reggie-blue1.png';
import { scrollToSection } from '@/lib/utils';

/**
 * HomeSustainability section explaining why the program matters.
 * Re-implemented to strictly match Figma node 803:2801 for desktop.
 */
export default function HomeSustainability() {
  const features = [
    'Reduce emissions',
    'Support the transition to lower GWP refrigerants',
    'Keep valuable refrigerants in use',
    'Strengthen a circular economy for the HVAC-R industry',
  ];

  const extraContent = (
    <p className="font-bold text-[#001a77] text-[20px] tracking-[-0.4px] leading-tight mt-2">
      Now, your impact could take you all <br className="hidden lg:block" /> the way to Japan!
    </p>
  );

  // const imageExtraContent = (
  //   <>
  //     <div className="absolute top-[40%] -right-10 w-[150%] h-auto opacity-80 pointer-events-none">
  //       <Image src={benefitVector1} alt="" className="w-full h-auto" />
  //     </div>
  //     <div className="absolute bottom-[-10%] -left-[10%] w-[120%] h-auto opacity-60 pointer-events-none">
  //       <Image src={benefitVector2} alt="" className="w-full h-auto" />
  //     </div>
  //   </>
  // );

  return (
    <SplitContentSection
      id="sustainability"
      title="Why it Matters"
      subtext="Every kilogram returned helps:"
      features={features}
      imageSrc={mascotImg}
      imageAlt="Reggie Mascot Sustainability"
      buttonText="Register Your Business"
      onButtonClick={() => scrollToSection('registration')}
      sectionClassName='pt-[60px] pb-[20px] lg:pt-[20px] lg:pb-[60px]'
      reverse={true}
      extraContent={extraContent}
      imageContainerClassName="bg-[#8bb8f8] lg:w-[553px] lg:flex-none"
    />
  );
}
