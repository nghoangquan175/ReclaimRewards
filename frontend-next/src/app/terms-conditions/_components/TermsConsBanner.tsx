import React from 'react';
import Image from 'next/image';

/**
 * TermsConsBanner implementing the high-fidelity design for the Terms & Conditions page.
 * Based on Figma node 319:13038.
 */
export default function TermsConsBanner() {
    return (
        <section className="bg-magenta600 relative w-full min-h-[400px] lg:h-[480px] overflow-hidden flex items-end">
            {/* Background/Layout Container */}
            <div className="container mx-auto max-w-[1440px] px-[80px] pb-[68px] w-full h-full relative flex items-end">

                {/* Large Logo */}
                <div className="absolute top-10 left-6 md:left-12 lg:left-20 w-[240px] md:w-[320px] lg:w-[407.71px] lg:h-[100px] z-[60]">
                    <Image
                        src="/images/logo-white.svg"
                        alt="Reclaim Rewards Logo Large"
                        width={407}
                        height={100}
                        priority
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Title Content */}
                <div className="relative z-10 w-full">
                    <h1 className="HeadingXLBold text-white uppercase sm:normal-case break-words max-w-[600px] lg:max-w-none">
                        Terms & Conditions
                    </h1>
                </div>

                {/* Mascot Illustration (Reggie) */}
                <div className="absolute top-[38px] left-[807px] w-[582px] h-auto pointer-events-none select-none">
                    <Image
                        src="/images/reggie-pose-b2.png"
                        alt="Reggie Mascot"
                        width={582}
                        height={562}
                        priority
                        className="w-full h-full object-contain object-bottom scale-110 origin-bottom-right lg:scale-100"
                    />
                </div>

            </div>
        </section>
    );
}
