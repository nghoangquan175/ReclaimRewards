import Image from 'next/image';

export default function TermsConsBanner() {
    return (
        <section className="bg-magenta600 relative w-full min-h-[500px] md:min-h-[400px] lg:h-[480px] overflow-hidden flex items-end pt-[80px] md:pt-0">
            {/* Background/Layout Container */}
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] pb-0 md:pb-[68px] w-full h-full relative flex flex-col md:flex-row items-center md:items-end">

                {/* Large Logo - Hidden on mobile */}
                <div className="hidden md:block absolute top-10 left-6 md:left-12 lg:left-20 w-[240px] md:w-[320px] lg:w-[407.71px] lg:h-[100px] z-[60]">
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
                <div className="relative z-10 w-full text-center md:text-left mb-10 md:mb-0">
                    <h1 className="HeadingMBold md:HeadingXLBold text-white uppercase sm:normal-case break-words max-w-[600px] lg:max-w-none mx-auto md:mx-0">
                        Terms & Conditions
                    </h1>
                </div>

                {/* Mascot Illustration (Reggie) */}
                <div className="relative md:absolute md:top-[38px] md:left-[807px] w-full max-w-[327px] md:max-w-none md:w-[582px] h-auto pointer-events-none select-none">
                    <Image
                        src="/images/reggie-pose-b2.png"
                        alt="Reggie Mascot"
                        width={582}
                        height={562}
                        priority
                        className="w-full h-full object-contain object-bottom md:scale-110 md:origin-bottom-right lg:scale-100"
                    />
                </div>

            </div>
        </section>
    );
}
