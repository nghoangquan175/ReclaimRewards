import React from 'react';
import Image from 'next/image';
import { ButtonPrimaryOnLight } from '@/components/ui/ButtonPrimaryOnLight';

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
    <section id="why-join" className="bg-grey50 py-15">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px]">
        <div className="bg-white flex flex-col lg:flex-row items-center justify-between gap-10 p-[30px] rounded-[24px] min-h-[566px] overflow-hidden">

          {/* Left: Text Content */}
          <div className="flex flex-col flex-1 gap-8 lg:gap-[32px] items-start justify-between h-full">
            <div className="flex flex-col gap-8 items-start w-full">
              <h2 className="HeadingMBold text-blue950 max-w-[559px] leading-tight">
                Do it properly. <br />
                Reclaim, don&apos;t vent.
              </h2>

              {/* Features List */}
              <ul className="flex flex-col gap-[10px] w-full">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-[14px] items-center">
                    <div className="bg-magenta600 flex items-center justify-center rounded-full size-5 shrink-0">
                      <Image
                        src="/images/tick-magenta.svg"
                        alt="Tick"
                        width={15}
                        height={15}
                        className="brightness-0 invert"
                      />
                    </div>
                    <p className="ContentMRegular text-grey950">
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

            <ButtonPrimaryOnLight
              className="mt-4 lg:mt-8"
            >
              Register your business
            </ButtonPrimaryOnLight>
          </div>

          {/* Right: Decorative Image */}
          <div className="relative w-full lg:w-[553px] h-[300px] lg:h-[478px] rounded-[24px] overflow-hidden">

            <div className="absolute top-[-222px] left-[-288px] w-[1200px] h-[900px]">
              <Image
                src="/images/benefit-main.png"
                alt="Program Benefits Illustration"
                width={1200}
                height={900}
                className="object-cover"
              />
            </div>
            <div className="absolute top-[235px] left-[-24px] w-[1074px] h-[443px] pointer-events-none opacity-50">
              <Image
                src="/images/benefit-vector-1.svg"
                alt=""
                width={1074}
                height={443}
                className="w-auto h-auto"
              />
            </div>
            <div className="absolute top-[391px] left-[-387px] w-[1101px] h-[364px] pointer-events-none opacity-50">
              <Image
                src="/images/benefit-vector-2.svg"
                alt=""
                width={1101}
                height={364}
                className="w-auto h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
