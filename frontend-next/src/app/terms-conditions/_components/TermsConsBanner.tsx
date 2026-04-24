import Image from 'next/image';
import Link from 'next/link';
import reggiePoseB3 from '@/assets/images/RR_Reggie_Pose_b3.png';
import logoWhite from '@/assets/icons/logo-white.svg';

export default function TermsConsBanner() {
    return (
        <section className="bg-magenta600 relative w-full lg:h-[400px] overflow-hidden flex items-end pt-[80px] lg:pt-0">
            {/* Background/Layout Container */}
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] pb-0 lg:pb-[60px] w-full h-full relative flex flex-col lg:flex-row items-center lg:items-end">

                {/* Large Logo - Hidden on mobile/tablet */}
                <Link href="/" className="hidden lg:block absolute top-10 left-6 md:left-12 lg:left-20 w-[240px] md:w-[320px] lg:w-[407.71px] lg:h-[100px] z-[60]">
                    <Image
                        src={logoWhite}
                        alt="Reclaim Rewards Logo Large"
                        width={407}
                        height={100}
                        priority
                        className="w-full h-full object-contain"
                    />
                </Link>

                {/* Title Content */}
                <div className="relative z-10 w-full text-center lg:text-left mb-6 md:mb-10 lg:mb-0 md:mt-6 lg:mt-0">
                    <div className="HeadingMBold lg:HeadingXLBold text-white uppercase sm:normal-case break-words lg:max-w-none mx-auto lg:mx-0">
                        Terms & Conditions
                    </div>
                </div>

                {/* Mascot Illustration (Reggie) */}
                <div className="relative lg:absolute lg:top-[38px] lg:left-[807px] w-full max-w-[327px] md:max-w-[500px] lg:max-w-none lg:w-[582px] h-auto pointer-events-none select-none">
                    <Image
                        src={reggiePoseB3}
                        alt="Reggie Mascot"
                        width={582}
                        height={562}
                        priority
                        className="w-full h-full object-contain object-bottom"
                    />
                </div>
            </div>
        </section>
    );
}
