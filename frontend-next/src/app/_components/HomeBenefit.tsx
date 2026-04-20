import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

/**
 * HomeBenefit section implementing the program benefits and "Do it properly" call to action.
 * Based on Figma node 307:5848.
 */
export default function HomeBenefit() {
  const features = [
    'Climb the leaderboard and see where you rank',
    'Get recognised as a top-performing business',
    'Turn everyday work into real impact',
    'Keep gas in use. Valuable refrigerant, reused.',
    'Less vented, more captured. Better for the industry, better for the planet.',
  ];

  return (
    <section className="bg-grey50 py-[60px] px-6 md:px-12 lg:px-[80px]">
      <div className="container mx-auto max-w-[1440px]">
        <div className="bg-white flex flex-col lg:flex-row items-center justify-between gap-10 p-8 lg:px-[40px] lg:py-[30px] rounded-[24px] min-h-[566px] overflow-hidden">
          
          {/* Left: Text Content */}
          <div className="flex flex-col flex-1 gap-8 lg:gap-[32px] items-start justify-between h-full">
            <div className="flex flex-col gap-8 items-start w-full">
              <h2 className="HeadingMBold text-blue950 max-w-[559px] leading-tight">
                Do it properly. <br />
                Reclaim, don&apos;t vent.
              </h2>

              {/* Features List */}
              <ul className="flex flex-col gap-4 w-full">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-4 items-center">
                    <div className="bg-magenta600 flex items-center justify-center rounded-full size-5 shrink-0">
                      <Image 
                        src="/images/tick-magenta.svg" 
                        alt="Tick" 
                        width={15} 
                        height={15}
                        className="invert"
                      />
                    </div>
                    <p className="text-grey950 text-[16px] font-normal leading-tight tracking-[-2%]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <p className="ContentXLBold text-blue950 leading-tight">
                  Now, your impact could take you all the way
                </p>
                <p className="ContentXLBold text-blue950 leading-tight">
                  to Japan.
                </p>
              </div>
            </div>

            <Button 
              variant="primary" 
              theme="on-light" 
              icon="arrow_forward"
              className="mt-4 lg:mt-8"
            >
              Register your business
            </Button>
          </div>

          {/* Right: Decorative Image */}
          <div className="relative w-full lg:w-[553px] h-[300px] lg:h-[478px] rounded-[24px] overflow-hidden">
            {/* Main Illustration */}
            <Image 
              src="/images/benefit-main.png" 
              alt="Program Benefits Illustration" 
              fill
              className="object-cover"
              priority
            />

            {/* Decorative Vectors - Absolute positioned based on Figma design */}
            <div className="absolute top-[46%] left-[-4%] w-[100%] h-[100%] pointer-events-none opacity-60">
               <Image 
                src="/images/benefit-vector-1.svg" 
                alt="" 
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] pointer-events-none opacity-40">
               <Image 
                src="/images/benefit-vector-2.svg" 
                alt="" 
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
